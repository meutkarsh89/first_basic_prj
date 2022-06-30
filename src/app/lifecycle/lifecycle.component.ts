import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges {

  name!:string;
  compRequired:boolean = true;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges){
    
  }

  onUpdateUser(uname:any){
    this.name = uname.value;
  }

  onDestroy(){
    this.compRequired = !this.compRequired;
  }

}
