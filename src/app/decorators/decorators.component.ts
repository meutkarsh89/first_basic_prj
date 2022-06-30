import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DcChildComponent } from './dc-child/dc-child.component';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss']
})
export class DecoratorsComponent implements OnInit, AfterViewInit {

  @ViewChild('box') boxElement!:ElementRef;

  @ViewChild(DcChildComponent) childComp!:DcChildComponent;

  

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {

    
    

  }

  ngAfterViewInit(){
    console.log(this.boxElement);
    // this.boxElement.nativeElement.style.backgroundColor = 'blue';
    // this.boxElement.nativeElement.style.color = 'white';
    // this.boxElement.nativeElement.classList.add('blueClass');

    this.renderer.setStyle(this.boxElement.nativeElement, 'backgroundColor', 'green');
    this.renderer.setStyle(this.boxElement.nativeElement, 'color', 'white');
    this.renderer.setAttribute(this.boxElement.nativeElement, 'title','this is renderer')
    this.renderer.addClass(this.boxElement.nativeElement, 'ml-5');
  }

  changeUser(){
    this.childComp.userName = 'Ajay';
  }
  invokeMethod(){
    this.childComp.onClick()
  }

}
