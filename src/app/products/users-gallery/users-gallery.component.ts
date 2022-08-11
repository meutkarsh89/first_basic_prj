import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { user } from '../app-Product-interface/user.interface';
import { UserService } from '../appProduct-services/user.service';

@Component({
  selector: 'app-users-gallery',
  templateUrl: './users-gallery.component.html',
  styleUrls: ['./users-gallery.component.scss']
})
export class UsersGalleryComponent implements OnInit {

  loading:boolean=false;
  users:user[]=[{
    uname:'utkarsh',designation:'Senior System engineer',department:'insurance',status:'online'
  }]
  userDetails:user[]=[
    // {uname:'Alfred',designation:'Senior developer',department:'insurance',status:'online'},
    // {uname:'Rover',designation:'Senior developer',department:'insurance',status:'offline'},
    // {uname:'Janeline',designation:'tech arch',department:'banking',status:'away'},
    // {uname:'Corner Michael',designation:'Senior tech lead',department:'insurance',status:'online'}
  ]

  constructor( private _userService:UserService) { }

  ngOnInit(): void {
    // for(let user of this.userDetails){
    //   this._userService.addUser(user).subscribe(res=>{
    //     console.log(res);
    //   })
    // }
    
    this._userService.fetchUsers().pipe(map((details:{[key:string]:any})=>{
      this.loading=true;
      console.log(this.loading);
      const userdetails:user[]=[];
      for(const key in details){
        if(details.hasOwnProperty(key)){
          userdetails.push({uId:key, ...details[key]})
        }
      }
      return userdetails
    }))
    .subscribe(res=>{
      console.log(res);
      this.userDetails=res;
      this.loading=false;
    })
  }

  generateFake(count:number):number[]{
    const indexes:number[]=[];
    for(let i=0; i<count; i++){
      indexes.push(i);
    }
    console.log(indexes);
    
    return indexes
  }
}
