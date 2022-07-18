import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector:'app-recipe-list',
    templateUrl:'./recipe-list.component.html'
})

export class RecipeListComponent implements OnInit{    
    recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test', 'https://img.freepik.com/free-vector/food-recipe-illustration_23-2147536975.jpg?t=st=1657820242~exp=1657820842~hmac=51f358acdcf780bfdf1e10650472e452272cf0792c7a93406a54a16f51c7929d&w=740')
    ]

    constructor(){

    }

    ngOnInit() {
        
    }
}