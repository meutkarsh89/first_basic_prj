import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  userName:string = '';

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.userName.subscribe(user=>{
      this.userName = user;
    })
  }

}
