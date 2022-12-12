import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected= new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Recipe One', 'This is description ','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574')
    ,new Recipe('Recipe Two', 'this is description ','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574')
  ]; 
 
  getRecipes() {
    return this.recipes.slice();
  }
}


// manage our recipes here
// move recipe property in service
// make it private, add method to acs recipes 
// make sure not to return direct acs