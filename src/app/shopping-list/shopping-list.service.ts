import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(items: Ingredient[]) {
    this.ingredients.push(...items);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(item: Ingredient) {
    var i = this.ingredients.indexOf(item);
    if(i >= 0){
      this.ingredients.splice(i, 1);
    }
  }

  clearIngredients() {
    this.ingredients = [];
  }
}
