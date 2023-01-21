import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeList: Recipe[] = [{
    id: 'r1',
    title: "Snizel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/220px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG",
    ingredients: ["flour", "meat"]
  },
  {
    id: 'r2',
    title: "Chicken Fried Steak",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chicken_Fried_Steak.jpg/300px-Chicken_Fried_Steak.jpg",
    ingredients: ["flour", "meat", "gravy"]
  }];
  constructor() { }
  recipeChanged = new Subject<Recipe[]>()

  initRecipe() {
    this.recipeChanged.next(this.recipeList)
  }


}
