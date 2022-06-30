import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomColor]'
})
export class CustomColorDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { 

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  changeBgColor(color:string){
    console.log("color in directive", color);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
