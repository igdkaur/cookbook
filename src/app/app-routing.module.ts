import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";

const appRoutes: Routes [
  {path: '', redirectTo: '/recipes'},
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipes', component: RecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {

}
