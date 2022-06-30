import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
  }

  changeBgColor(color:string){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color)
  }


}
