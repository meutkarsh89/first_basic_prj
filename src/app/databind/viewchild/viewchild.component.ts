import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Comp6Component } from '../../app-shared-module/comp/comp6/comp6.component';
@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit, AfterViewInit {

  userName:string = "Utkarsh";

  @ViewChild('box') boxElement!:ElementRef;

  @ViewChild(Comp6Component) childComp!:Comp6Component;
  
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    console.log(this.boxElement);
    // this.boxElement.nativeElement.style.backgroundColor = 'blue'; 
    // this.boxElement.nativeElement.classList.add('my-class');
    this.renderer.setStyle(this.boxElement.nativeElement, 'backgroundColor', 'green');
    this.renderer.addClass(this.boxElement.nativeElement, 'new-class');
  }

  onChangeProp(){
    this.childComp.myValue = 'Ajay';
  }
  onCallMethod(){
    this.childComp.onClick();
  }
}
