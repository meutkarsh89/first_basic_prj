import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
 AfterViewInit, AfterViewChecked, OnDestroy{

 @Input() userName!:string;
 counter:any;
 num:number = 1;

  constructor() {
    console.log("constructor called in child");
    
   }

   ngOnChanges(changes:SimpleChanges){
    console.log("OnChanges called in child with: ",changes);
    
   }

  ngOnInit(): void {
    console.log("ngOnInit called in child");
    this.counter = setInterval(()=>{
      this.num = this.num + 1;
      console.log(this.num);
      
    },1000);
  }

  ngDoCheck(){
    console.log("doCheck called");
    
  }

  ngAfterContentInit(){
    console.log("contentInit called");
    
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
    
  }

  ngAfterViewInit(){
    console.log("ViewInit called");
    
  }

  ngAfterViewChecked(){
    console.log("viewChecked called");
    
  }

  ngOnDestroy(){
    console.log("onDestroy fired");
    clearInterval(this.counter);
  }

}
