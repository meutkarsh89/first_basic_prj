import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { ParentComponent } from './parent/parent.component';
import { SubjectComponent } from './subject/subject.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { DatabindComponent } from './databind.component';
import { CompModule } from '../app-shared-module/comp/comp.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChildComponent,
    EventbindComponent,
    ParentComponent,
    SubjectComponent,
    ViewchildComponent,
    DatabindComponent
  ],
  imports: [
    CommonModule,
    CompModule,
    FormsModule
  ]
})
export class DatabindModule { }
