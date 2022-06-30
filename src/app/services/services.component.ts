import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  userName!:string;

  constructor(private _duService: DesignUtilityService) { }

  ngOnInit(): void {
    this._duService.userName.subscribe(user => {
      this.userName = user;
    })
  }

}
