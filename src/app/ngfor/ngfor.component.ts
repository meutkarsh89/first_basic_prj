import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  products:Array<any> = [
    {prodImg:'../../assets/laptop.jpg', prodName:'Laptop', prodId:'prod01', prodPrice:50000},
    {prodImg:'../../assets/mobile.jpeg', prodName:'Mobile', prodId:'prod01', prodPrice:10000},
    {prodImg:'../../assets/television.jpg', prodName:'TV', prodId:'prod01', prodPrice:35000},
    {prodImg:'../../assets/washing-machine.jpeg', prodName:'Washing Machine', prodId:'prod01', prodPrice:15000}
  ]

  students:Array<any> = [];
  status:boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddUser(user:any){
    this.students.push({
      name:user.value
    });
    if(this.students.length>3){
      this.router.navigate(['products']);
    }
  }

  onRemoverUser(index:number){
    this.students.splice(index, 1);
  }

}
