import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { DesignPatternComponent } from './design-pattern/design-pattern.component';
import { HomeComponent } from './home/home.component';
import { HostingComponent } from './hosting/hosting.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { OopComponent } from './oop/oop.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SoftwareArchitectureComponent } from './software-architecture/software-architecture.component';
import { SystemDesignProjectsComponent } from './system-design-projects/system-design-projects.component';
import { SystemDesignComponent } from './system-design/system-design.component';
import { WebDevelopmentProjectsComponent } from './web-development-projects/web-development-projects.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { WebServicesDevelopmentComponent } from './web-services-development/web-services-development.component';
import { WebserviceComponent } from './webservice/webservice.component';


const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: HomeComponent},
{path: 'blogs',pathMatch: 'full', component: BlogsComponent},
{path: 'about',pathMatch: 'full', component: IntroductionComponent},
{path: 'MoreAbout',pathMatch: 'full', component: AboutComponent},
{path: 'contact', pathMatch: 'full', component: ContactComponent},
{path: 'design-pattern', pathMatch: 'full', component: DesignPatternComponent},
{path: 'system-design', pathMatch: 'full', component: SystemDesignComponent},
{path: 'soft-arch', pathMatch: 'full', component: SoftwareArchitectureComponent},
{path: 'webservice', pathMatch: 'full', component: WebserviceComponent},
{path: 'hosting', pathMatch: 'full', component: HostingComponent},
{path: 'webdevelopment', pathMatch: 'full', component: WebDevelopmentComponent},
{path: 'oop', pathMatch:'full', component: OopComponent},
{path: 'web-dev', pathMatch:'full', component: WebDevelopmentProjectsComponent},
{path: 'sys-design', pathMatch:'full', component: SystemDesignProjectsComponent},
{path: 'web-service-dev', pathMatch:'full', component: WebServicesDevelopmentComponent},
{path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true}  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
