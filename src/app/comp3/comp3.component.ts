import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  userName:string='';

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.userName.subscribe(user=>{
      this.userName = user;
    })
  }

}
