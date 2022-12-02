import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cloves', 5),
    new Ingredient('Bay Leaves', 10)
  ]; //imp to define type here, then create an ingrdnt
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
  }
 }

// recipe model - recipe folder
// but ingredient model - shared folder
// **shared folder** - folder in app folder 
// - will contain features that will be shared across app