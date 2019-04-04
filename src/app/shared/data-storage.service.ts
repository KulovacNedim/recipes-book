import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-b01a5.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
}