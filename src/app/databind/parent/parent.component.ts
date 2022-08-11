import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  proSelected:string= '';
  addedItem:any;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectProduct(prod:string){
    this.proSelected = prod;
  }

  onAddToCart(data:string){
    this.addedItem = data;
  }
  // onaddToCart(){
  //   this.addedItem=this.proSelected;
  // }


}
