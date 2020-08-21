import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe'

 @Injectable()
export class RecipeService {
    private recipes: Recipe[]=[
         new Recipe('Pancake' ,  'this is a pancake' ,'12/10/20','12/15/20',200, 'https://i.ytimg.com/vi/7ebZWviUfUA/maxresdefault.jpg'),
         new Recipe('Dosa' ,  'I like Dosa'  ,'12/10/20','12/15/20',400,'https://sukhis.com/wp-content/uploads/2020/01/Dosa.jpg'),
         new Recipe('Burger' ,  'burger king' ,'12/10/20','12/15/20',300,'https://i.insider.com/5c420211b492cb5cdb1d88d4?width=1100&format=jpeg&auto=webp'),
    
    ]

    
       loadRecipe() {return this.recipes};
       addrecipetodb(){
            console.log("Recipe is added to db");
       }
    
}