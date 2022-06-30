import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // productSelected:boolean=false;

  @Input() productSelected:string='';
  @Output() prodToSend = new EventEmitter<any>();
  data:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.data = this.productSelected;
    this.prodToSend.emit(this.data);
  }

}
