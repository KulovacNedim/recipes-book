import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe-list/recipes.model';


@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-b01a5.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true});
        return this.http.request(req);
    }

    getRecipes() {
        // this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json?auth=' + token)
        this.http.get<Recipe[]>('https://ng-recipe-book-b01a5.firebaseio.com/recipes.json', {
          observe: 'body',
          responseType: 'json'
        })
          .map(
            (recipes) => {
              console.log(recipes);
              for (let recipe of recipes) {
                if (!recipe['ingredients']) {
                  recipe['ingredients'] = [];
                }
              }
              return recipes;
            }
          )
          .subscribe(
            (recipes: Recipe[]) => {
              this.recipeService.setRecipes(recipes);
            }
          );
      }
}
