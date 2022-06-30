import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.scss']
})
export class EventbindComponent implements OnInit {

  msg:string='';
  inpMsg:string='';
  cart:string='';
  data:string='Utkarsh';

  constructor() { }

  ngOnInit(): void {
  }

  onAddtoCartt(event:any){
    this.cart = event.target.value + " is added to Cart";
  }

  onAddtoCart(){
    this.msg = 'Product is added';
  }

  onSendData(data:any){
    console.log(data.target.value);
    
  }

  onClicktoCart(val:any){
    console.log(val.value);
    
    // this.inpMsg = 
  }

  onChangeinp(){
    this.data = 'Abhay';
  }
}
