import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f',{static:false}) slForm: NgForm;


  //addedIngredient = new EventEmitter<{name:string,amount:number}>();
  // @Output() addedIngredient = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index); 
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      )
    };
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // onAdd() {
  //   const name = this.nameInputRef.nativeElement.value;
  //   const amount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(name, amount);
  //   // this.addedIngredient.emit(newIngredient);
  //   this.slService.addIngredient(newIngredient);
  // }

  
  onAddItem(form: NgForm) {
    const value =  form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    // this.addedIngredient.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
