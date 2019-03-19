import { Recipe } from './recipe-list/recipes.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOtu_HfrswrSnQ_mTdQRu8HCHn1deN62_DiyxYHMuXjJ95mjOUw'),
        new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOtu_HfrswrSnQ_mTdQRu8HCHn1deN62_DiyxYHMuXjJ95mjOUw')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}