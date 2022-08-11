import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { NgifComponent } from './ngif/ngif.component';
import { CardComponent } from './card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    Card1Component,
    Card2Component,
    NgifComponent,
    CardComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Card1Component,
    Card2Component,
    NgifComponent,
    CardComponent,
    PageNotFoundComponent
  ]
})
export class CardModule { }
