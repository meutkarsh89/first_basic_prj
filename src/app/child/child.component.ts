import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() productSelected:string = '';
  @Output() itemToAdd = new EventEmitter<any>();
  addedItem:any;

  constructor() { }

  ngOnInit(): void {
  }

  onaddToCart(){
    this.addedItem=this.productSelected;
    this.itemToAdd.emit(this.addedItem);
  }


}
