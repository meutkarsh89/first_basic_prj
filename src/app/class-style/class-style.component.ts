import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.scss']
})
export class ClassStyleComponent implements OnInit {

  myProp:boolean=false;
  myStyle:string='15px';
  isActive:boolean=false;
  multClasses:{class1:boolean,class4:boolean}={
    class1:true,
    class4:true,
  };
  mltStyle:any={
    'background':'red',
    'border':'5px solid blue'
  };

  // However, if you change the type of the mltStyle variable to object, 
  // the TypeScript compiler will issue an error: 
  // error TS2339: Property 'background' does not exist on type 'object'.

  // The TypeScript any type allows you to store a value of any type. It instructs the compiler to skip type checking.
  
  // Use the any type to store a value that you don’t actually know its type at the compile-time or when you migrate a 
  // JavaScript project over to a TypeScript project

  constructor() { }

  ngOnInit(): void {
    console.log(this.mltStyle.background);
    this.mltStyle.background="blue";
    console.log( this.multClasses.class1);
    
    this.multClasses["class1"] = false
  }
}
