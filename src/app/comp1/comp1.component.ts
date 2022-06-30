import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private _duService: DesignUtilityService) { }

  ngOnInit(): void {
    this._duService.userName.subscribe(user => {
      this.userName = user;
    })
  }

  userName:string = 'Utkarsh';
  onUpdateUser(uname:any){
    // this.userName = uname.value;
    this._duService.userName.next(uname.value);
  }
}
