import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.scss']
})
export class DatabindComponent implements OnInit {

  myName:string = "utkarsh";
  designation:boolean = true;
  status:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  myMethod(){
    return "I am a "+this.designation
  }

}
