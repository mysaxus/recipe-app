import { Component, OnInit } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector:'app-shopping-list',
    templateUrl:'./shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit{
    ingredients: Ingredient[] = [
        new Ingredient('Maçãs', 5),
        new Ingredient('Tomates', 10),
    ]

    constructor(){

    }

    ngOnInit(){

    }

    ingredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient)
    }


}