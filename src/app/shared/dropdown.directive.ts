import { Directive, HostListener } from "@angular/core";

@Directive ({
  selector:'[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}


// add functionality - add a certain CSS class
// to the element it sits on, once it is clicked.
// So once this element, the directive sits on, is clicked
// and remove the class once we click again