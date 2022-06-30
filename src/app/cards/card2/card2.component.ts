import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../appServices/design-utility.service';

import { MessageService } from '../../appServices/message.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {

  newsPortal:any;
  products:any=[];

  constructor(private _duService: DesignUtilityService) { }

  ngOnInit(): void {
    this.newsPortal = this._duService.newsPortal;
    // this.products= this._duService.newsLists;
    this._duService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  onClickBtn(){
    // const msgService = new MessageService;
    // msgService.subscribetoNews()
    this._duService.subscribetoNews();
  }

}
