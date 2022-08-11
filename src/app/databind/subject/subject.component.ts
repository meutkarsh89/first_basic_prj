import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  userName:string = '';

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.userName.subscribe(user=>{
      this.userName = user;
    })
  }

}
