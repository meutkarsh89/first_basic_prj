import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products.component';
import { TelevisionComponent } from './television/television.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { RouterModule, Routes } from '@angular/router';
// import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CardModule } from '../app-shared-module/card/card.module';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './appProduct-services/products.service';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ProductsGalleryComponent } from './products-gallery/products-gallery.component';
import { UsersGalleryComponent } from './users-gallery/users-gallery.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { NgifComponent } from '../ngif/ngif.component';

const proRoutes:Routes = [
  {path: '', children:[
    {path: '', component: ProductsComponent, children: [
      {path: '', redirectTo:'prod-gallery', pathMatch:'full'},
      {path: 'prod-gallery', children:[
        {path: '', component: ProductsGalleryComponent},
        {path: 'laptop', component: LaptopComponent},
        {path: 'television', component: TelevisionComponent},
        {path: 'mobile', component: MobileComponent},
        {path: 'washing-machine', component: WashingMachineComponent},
      ]},
      {path: 'manage-products', component: ManageProductsComponent},
      {path: 'manage-users', component:ManageUserComponent},
      {path: 'users-gallery', children:[
        {path: '', component: UsersGalleryComponent},
        {path: ':id', component: UserDetailsComponent}
      ]},
      
    ]},
    // {path: 'manage-products', component: ManageProductsComponent}
  ]}
  
]

@NgModule({
  declarations: [ 
    ProductsComponent,
    LaptopComponent,
    TelevisionComponent,
    MobileComponent,
    WashingMachineComponent,
    ManageProductsComponent,
    ManageUserComponent,
    ProductsGalleryComponent,
    UsersGalleryComponent,
    UserDetailsComponent,
    // NgifComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    // NgModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild(proRoutes)
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { 
  constructor(){
    console.log('Product module loaded');
    
  }
}
