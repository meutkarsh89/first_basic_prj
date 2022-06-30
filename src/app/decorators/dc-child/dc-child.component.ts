import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CustomColorDirective } from 'src/app/appDirectives/custom-color.directive';

@Component({
  selector: 'app-dc-child',
  templateUrl: './dc-child.component.html',
  styleUrls: ['./dc-child.component.scss']
})
export class DcChildComponent implements OnInit, AfterContentInit {

  userName:string = 'Satyam';

  @ContentChild('child') childCont!: ElementRef;

  @ViewChild(CustomColorDirective) custClrDir!:CustomColorDirective;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  onClick(){
    alert(this.userName);
    let text = this.renderer.createText('this text inserted by renderer');
    this.renderer.appendChild(this.childCont.nativeElement, text)
  }

  ngAfterContentInit(){
    this.renderer.setStyle(this.childCont.nativeElement, 'color', 'blue')
  }

  changeColor(color:string){
    console.log("color in child comp", color);
    
    this.custClrDir.changeBgColor(color);
  }

}
