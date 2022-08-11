import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  userName:string = '';

  constructor( private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.userName.subscribe(user=>{
      this.userName = user;
    })
  }

  onUpdateUser(uname:any){
    // this.userName = uname.value;
    this._du.userName.next(uname.value);
  }


}
