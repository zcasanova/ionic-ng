import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipeList!: Recipe[] ;
  recipeService: RecipesService;
  recipeListSub!: Subscription;
  isLoading = false
  constructor(recipeService: RecipesService) {
    this.recipeService = recipeService;
  }
  ngOnDestroy(): void {
    this.recipeListSub.unsubscribe();
  }
  ngOnInit(): void {
    this.recipeListSub = this.recipeService.recipeChanged.subscribe(recipe => {
      this.recipeList = recipe
      this.isLoading = false
    })
    this.isLoading = true
    this.recipeService.initRecipe()
  }



}
