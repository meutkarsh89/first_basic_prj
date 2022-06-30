import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../appServices/design-utility.service';
import { MessageService } from '../../appServices/message.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {

  constructor(private _duService: DesignUtilityService) { }

  ngOnInit(): void {
  }

  onClickBtn(){
    // const msgService = new MessageService;
    // msgService.subscribetoNews()
    this._duService.subscribetoNews();
  }

}
