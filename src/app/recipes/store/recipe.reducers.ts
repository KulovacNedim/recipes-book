import { Recipe } from '../recipes.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

export interface FeatureState {
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

export function recipeReducer(state = initialState, action) {
    return state;
}
