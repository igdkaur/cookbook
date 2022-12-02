import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe One', 'This is description ','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574')
    ,new Recipe('Recipe Two', 'this is description ','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574')
  ]; // here type of recipe is the model we defined // to be specific recipe would hold array of Recipe objects
 
 
  constructor() { }

  ngOnInit(): void {
  }
  
  onRecipeSelected(recipe:Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

//using the recipe model we made , in the list now
//to display the model, use template of recipe comp