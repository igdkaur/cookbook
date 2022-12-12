import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected= new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe One', 
      'This is description ',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries',20)
      ])
    ,
    new Recipe(
      'Recipe Two', 
      'This is description ',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Fries',20)
    ])
  ]; 
 
  constructor(private slService:ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}


// manage our recipes here
// move recipe property in service
// make it private, add method to acs recipes 
// make sure not to return direct acs

//acs sl service