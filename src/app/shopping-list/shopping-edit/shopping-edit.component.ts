import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector:'app-shopping-edit',
    templateUrl:'./shopping-edit.component.html'
})

export class ShoppingEditComponent implements OnInit{

    @Output() ingredientCreated = new EventEmitter<Ingredient>();
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;

    constructor(){

    }

    ngOnInit(){

    }

    onCreateIngredient(){
        this.ingredientCreated.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    }
}