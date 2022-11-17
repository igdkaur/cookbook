import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []; // here type of recipe is the model we defined // to be specific recipe would hold array of Recipe objects
  constructor() { }

  ngOnInit(): void {
  }

}
