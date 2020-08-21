import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeBookAppComponent } from "./recipe-book.component";
import { HeaderComponent } from "./header.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import {RecipeService} from "./shared/recipes.service"
import {Picker} from './shared/recipe.summary'
import { ColorChanger } from  './shared/colorchanger.directive'
import { DropdownDirective } from './shared/dropdown.directive'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    Picker,
    ColorChanger,
    DropdownDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers:[RecipeService],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
