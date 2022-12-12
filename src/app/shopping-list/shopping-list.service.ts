import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Cloves', 5),
    new Ingredient('Bay Leaves', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
}