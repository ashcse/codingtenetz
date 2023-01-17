import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FooterComponent } from './footer/footer.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TopicsComponent } from './topics/topics.component';
import { AboutComponent } from './about/about.component';
import { DesignPatternComponent } from './design-pattern/design-pattern.component';
import { SystemDesignComponent } from './system-design/system-design.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { HostingComponent } from './hosting/hosting.component';
import { SoftwareArchitectureComponent } from './software-architecture/software-architecture.component';
import { WebserviceComponent } from './webservice/webservice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    FooterComponent,
    BlogsComponent,
    ContactComponent,
    IntroductionComponent,
    TopicsComponent,
    AboutComponent,
    DesignPatternComponent,
    SystemDesignComponent,
    WebDevelopmentComponent,
    HostingComponent,
    SoftwareArchitectureComponent,
    WebserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
