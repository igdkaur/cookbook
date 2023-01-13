import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Cloves', 5),
  //   new Ingredient('Bay Leaves', 10)
  // ]; //imp to define type here, then create an ingrdnt

  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  // onIngredientAdded(ingredient:Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index)
  }
 }

// recipe model - recipe folder
// but ingredient model - shared folder
// **shared folder** - folder in app folder 
// - will contain features that will be shared across app

//store subsptn and clean up