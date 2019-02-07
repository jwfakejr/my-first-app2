import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {


  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://recipebook-9b418.firebaseio.com/data.json?auth='+token,
      this.recipeService.getRecipes(),
      {headers: headers});
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http.get('https://recipebook-9b418.firebaseio.com/data.json?auth='+token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}

