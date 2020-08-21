import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Recipe } from "../recipe";
import { RecipeService } from "src/app/shared/recipes.service"

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private recipe1: RecipeService) {}

  ngOnInit() {
  }
  addrecipe(nf: NgForm){
    console.log(nf.value)
    this.recipe1.addrecipetodb();
  }
}
