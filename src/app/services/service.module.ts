import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
// import { Card1Component } from '../card1/card1.component';
// import { Card2Component } from '../card2/card2.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CardModule } from '../app-shared-module/card/card.module';

const servRoutes:Routes = [
  
  {path: 'services', component: ServicesComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    
    ServicesComponent,
    // Card1Component,
    // Card2Component,
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(servRoutes)
  ]
})
export class ServiceModule {
  constructor(){
    console.log('Service module loaded');
    
  }
 }
