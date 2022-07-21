import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector:'app-recipe-list',
    templateUrl:'./recipe-list.component.html'
})

export class RecipeListComponent implements OnInit{   

    @Output() recipeWasSelected = new EventEmitter<Recipe>();
 
    recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test', 
        'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-High-Quality-Image.png'),
        new Recipe('A test Recipe 2', 'This is simply a test 2', 'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-High-Quality-Image.png')
    ]

    constructor(){

    }

    ngOnInit() {
        
    }

    onSelected(recipe: Recipe){
        this.recipeWasSelected.emit(recipe)
    }
}