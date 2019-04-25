import { Recipe } from '../recipes.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as RecipeAction from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe('Tasty Schnitzel',
            'A super-tasty Schnitzel - just awsome!',
            'https://i.ytimg.com/vi/mbgenXJgWLs/hqdefault.jpg',
            [
                new Ingredient('Meet', 1),
                new Ingredient('Frech Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://aht.seriouseats.com/images/20100331-fatburger-primary.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ]
};

export function recipeReducer(state = initialState, action: RecipeAction.RecipeAction) {
    switch (action.type) {
        case (RecipeAction.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case (RecipeAction.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case (RecipeAction.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updatedRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: recipes
            };
        case (RecipeAction.DELETE_RECIPE):
            const newRecipesArrey = [...state.recipes];
            newRecipesArrey.splice(action.payload, 1);
            return {
                ...state,
                recipes: newRecipesArrey
            };
        default:
            return state;
    }
}
