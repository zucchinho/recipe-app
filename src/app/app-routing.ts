import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

const appRoutes: Routes = [
    {
      path: 'recipes', 
      component: RecipesComponent, 
      children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: EditRecipeComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: EditRecipeComponent }
      ]
    },
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
      path: 'shopping-list',
      component: ShoppingListComponent,
      children: []
    },
    { 
      path: 'not-found', 
      component: ErrorPageComponent, 
      data: { message: 'Page not found!' }
    },
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}