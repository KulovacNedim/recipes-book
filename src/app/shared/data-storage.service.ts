import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe-list/recipes.model';
import { map } from 'rxjs/operators';


@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-b01a5.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get<Recipe[]>(`https://ng-recipe-book-b01a5.firebaseio.com/recipes.json`, {
            observe: `body`,
            responseType: `json`
        })
            .pipe(
                map(
                    (recipes) => {
                        for (const recipe of recipes) {
                            if (!recipe[`ingredients`]) {
                                recipe[`ingredients`] = [];
                            }
                        }
                        return recipes;
                    }
                ))
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
