import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { WebDevelopmentProjectsComponent } from './web-development-projects/web-development-projects.component';
import { OopComponent } from './oop/oop.component';
import { SystemDesignProjectsComponent } from './system-design-projects/system-design-projects.component';
import { WebServicesDevelopmentComponent } from './web-services-development/web-services-development.component';
import { SharedModule } from './common/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { LoginService } from './services/login.service';
import { HttpInterceptorService } from './services/interceptors/http-interceptor.service';
import { BillingComponent } from './billing/billing.component';
import { TenderComponent } from './tender/tender.component';

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
    WebserviceComponent,
    WebDevelopmentProjectsComponent,
    OopComponent,
    SystemDesignProjectsComponent,
    WebServicesDevelopmentComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VehicleComponent,
    BillingComponent,
    TenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
