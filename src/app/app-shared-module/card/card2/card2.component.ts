import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
 import { MessageSevice } from '../../../appServices/message.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {

  products:any = [];

  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {
    // this.products = this._du.newsLists;
    this._du.getData().subscribe(val => {
        console.log(val);
        val.forEach((element: { address: { city: any; }; }) => {
          console.log(element.address.city);
          
        });
        
        this.products = val;
    })
  }

  onClickBtn(){
    const msgService = new MessageSevice;
    msgService.displayMsg();
  }


}
