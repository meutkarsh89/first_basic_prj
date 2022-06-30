import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../../appServices/design-utility.service';
// import { MessageSevice } from '../../../appServices/message.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {

  newsName:string = '';

  constructor(private _duService: DesignUtilityService) { }

  ngOnInit(): void {
    this.newsName = this._duService.newsLetterName;
  }

  onClickBtn(){
    // const msgService = new MessageSevice;
    // msgService.displayMsg();
    this._duService.displayMsg();
  }

}
