import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CardModule } from '../app-shared-module/card/card.module';
// import { NgifComponent } from '../ngif/ngif.component';

const proRoutes:Routes = [
  {path: '', children:[
    {path: '', component: ProductsComponent},
    {path: 'laptop', component: LaptopComponent},
    {path: 'television', component: TelevisionComponent},
    {path: 'mobile', component: MobileComponent},
    {path: 'washing-machine', component: WashingMachineComponent}
  ]}
  
]

@NgModule({
  declarations: [ 
    ProductsComponent,
    LaptopComponent,
    TelevisionComponent,
    MobileComponent,
    WashingMachineComponent,
    // NgifComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(proRoutes)
  ]
})
export class ProductsModule { 
  constructor(){
    console.log('Product module loaded');
    
  }
}
