import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  value:string = '';
  status:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(val:any){
    this.value = val.value;
  }

  onClick(){
    this.status = false;
  }

}
