import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomPreloadService } from './appServices/custom-preload.service';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TempFormComponent } from './forms/temp-form/temp-form.component';
import { HomeComponent } from './home/home.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LoginComponent } from './login/login.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component';
// import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { ServicesComponent } from './services/services.component';
import { SubjectComponent } from './subject/subject.component';
// import { TempFormComponent } from './temp-form/temp-form.component';
import { ViewchildComponent } from './viewchild/viewchild.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', data: {'mypreload':true}, loadChildren: ()=> import('./products/products.module').then(module=> module.ProductsModule)},
  // {path: 'services', component: ServicesComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'communication', component: ParentComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'viewchild', component: ViewchildComponent},
  {path:'pipes', component: CustomPipeComponent},
  {path: 'filter-pipe', component: FilterPipeComponent},
  {path: 'forms', loadChildren: ()=> import('./forms/my-forms.module').then(module=> module.MyFormsModule)}
  // {path: 'temp-form', component: TempFormComponent},
  // {path: 'reactive-form', component: ReactiveFormComponent},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy : PreloadAllModules
    preloadingStrategy: CustomPreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
