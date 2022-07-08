import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFormsComponent } from './my-forms/my-forms.component';

const formsRoutes: Routes = [
  {path:'', component: MyFormsComponent, children: [
    {path:'', redirectTo:'temp-form', pathMatch:'full'},
    {path: 'temp-form', component: TempFormComponent},
    {path: 'reactive-form', component: ReactiveFormComponent},
  ]},
  
]

@NgModule({
  declarations: [
    TempFormComponent,
    ReactiveFormComponent,
    MyFormsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(formsRoutes)
  ]
})
export class MyFormsModule {
  constructor(){
    console.log("forms module loaded");
  }
  
 }
