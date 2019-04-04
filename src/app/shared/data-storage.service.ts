import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe-list/recipes.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-b01a5.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.http.get<Recipe[]>(`https://ng-recipe-book-b01a5.firebaseio.com/recipes.json?auth=` + token)
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