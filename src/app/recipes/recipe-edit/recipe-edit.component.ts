import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode =  false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = +params['id'] != null;
        // console.log("edit",this.editMode)
      }
    )
  }

}

// ID will only be not undefined if we are in edit mode,
// because then an ID will be present.