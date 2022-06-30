import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.scss']
})
export class EventbindComponent implements OnInit {

  msg:string = '';
  dynValue:string = 'Abhay';
  constructor() { }

  ngOnInit(): void {
  }

  onAddtoCart(event:any){
    this.msg = event.target.value+" is added to cart";
  }

  onTypeValue(data: any){
    console.log(data.target.value);
    
  }

  onGetData(data:any){
    console.log(data.value);
    this.msg = data.value;
    this.dynValue = 'Utkarsh';
  }

}
