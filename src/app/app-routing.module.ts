import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: IntroductionComponent},
{path: 'blogs',pathMatch: 'full', component: BlogsComponent},
{path: 'about',pathMatch: 'full', component: AboutComponent},
{path: 'contact', pathMatch: 'full', component: ContactComponent},
{path: '**', component: IntroductionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
