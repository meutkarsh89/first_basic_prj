import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { NgifComponent } from './ngif/ngif.component';



@NgModule({
  declarations: [
    Card1Component,
    Card2Component,
    NgifComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Card1Component,
    Card2Component,
    NgifComponent
  ]
})
export class CardModule { }
