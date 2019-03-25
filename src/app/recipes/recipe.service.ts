import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Spaghetti Bolognese', 
      'This is simply delicious.', 
      'https://upload.wikimedia.org/wikipedia/commons/b/b7/Lutong_Bahay_-_Bolognese_Spaghetti.jpg',
      [
        new Ingredient('Tomatoes', 10),
        new Ingredient('Spaghetti', 1),
        new Ingredient('Beef', 1)
      ]),
      new Recipe(
        2,
        'Pizza', 
        'And I\'m Luigi Mario!', 
        'https://farm5.staticflickr.com/4097/4932649560_807c7382e4_b.jpg',
        [
          new Ingredient('Tomatoes', 3),
          new Ingredient('Pizza Dough', 1),
          new Ingredient('Mushrooms', 3),
          new Ingredient('Pepperoni', 1),
          new Ingredient('Mozzarella', 1),
        ])  
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.find(
      (r) => {
        return r.id === id; 
      });      
  }
}
