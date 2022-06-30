import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.scss']
})
export class DatabindComponent implements OnInit {

  myName:string = 'Aakash';
  designation:string = 'software engineer'
  stasus:boolean = false;
  varName:string = "Angular";
  hidStatus:boolean = false;
  data:string = "5px";

  classObj:any = {
    class1:true,
    class2:false,
    class3:true
  }

  myStyle = {
    'width':'50px',
    'height':'50px',
    'border':'5px solid blue'
  }


  constructor() { }

  ngOnInit(): void {
  }

  customeMethod(){
    return "I am a "+ this.designation;
  }

}
