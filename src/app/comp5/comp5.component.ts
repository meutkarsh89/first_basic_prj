import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit, OnChanges {

  @Input() myValue!:string;

  constructor() {console.log("constructor called")}

  ngOnInit(): void {
    console.log("ngOnInit called")
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges called: ', changes['myValue'].previousValue);
    
  }

  ngDoCheck(){
    console.log("ngDoCheck called");
    
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called ");
    
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked clicked");
    
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
    
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
    
  }
  ngOnDestroy(){
    console.log("ngOnDestroy called");
    
  }

  

}
