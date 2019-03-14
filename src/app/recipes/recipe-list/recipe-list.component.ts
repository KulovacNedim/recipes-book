import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOtu_HfrswrSnQ_mTdQRu8HCHn1deN62_DiyxYHMuXjJ95mjOUw'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOtu_HfrswrSnQ_mTdQRu8HCHn1deN62_DiyxYHMuXjJ95mjOUw')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
