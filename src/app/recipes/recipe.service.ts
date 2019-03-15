import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Bolognese', 
      'This is simply delicious.', 
      'https://upload.wikimedia.org/wikipedia/commons/b/b7/Lutong_Bahay_-_Bolognese_Spaghetti.jpg',
      [
        new Ingredient('Tomatoes', 10),
        new Ingredient('Spaghetti', 1),
        new Ingredient('Beef', 1)
      ])    
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
