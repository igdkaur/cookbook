import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  // recipeSelected= new EventEmitter<Recipe>();
  // recipeSelected= new Subject<Recipe>();


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

  //load single recipe by id
  getRecipe(index: number) {
    // return this.recipes.slice()[index];
    return this.recipes[index];
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

// Now with routing added
// because now when we want to select a recipe,
// we do this by clicking on it
// and we use the route link directive