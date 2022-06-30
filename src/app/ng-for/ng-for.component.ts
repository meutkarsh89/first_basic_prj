import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  products:Array<any> = [
    {prodImg:'../../assets/laptop.jpg', prodName:'Laptop', prodId:'prod01', prodPrice:50000},
    {prodImg:'../../assets/mobile.jpeg', prodName:'Mobile', prodId:'prod01', prodPrice:10000},
    {prodImg:'../../assets/television.jpg', prodName:'TV', prodId:'prod01', prodPrice:35000},
    {prodImg:'../../assets/washing-machine.jpeg', prodName:'Washing Machine', prodId:'prod01', prodPrice:15000}
  ]

  users:Array<any> = [];
  status:boolean= true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddNewUser(uname:any){
    this.users.push({
      name:uname.value
    });
    if(this.users.length>3){
      this.router.navigate(['products']);
    }
  }

  onRemoveLastUser(){
    this.users.splice(this.users.length - 1);
  }
  onRemoveItem(index:number){
    this.users.splice(index,1);
  }

}
