import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CustomDirDirective } from '../../../app-directives/custom-dir.directive';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.scss']
})
export class Comp6Component implements OnInit, AfterContentInit {

  myValue:string="default";

  @ContentChild('childCon') content!: ElementRef;

  @ViewChild(CustomDirDirective) custDir!:CustomDirDirective;
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    
  }

  ngAfterContentInit(){
    console.log(this.content);
    this.renderer.setStyle(this.content.nativeElement, 'color', 'blue')
    let text = this.renderer.createText('hello All')
    this.renderer.appendChild(this.content.nativeElement, text);
  }

  onClick(){
    alert(this.myValue);
    
  }

  changeClr(color:string){
    this.custDir.changeBgColor(color);
  }

}
