import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../app-Product-interface/user.interface';
import { UserService } from '../appProduct-services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetail!:user;
  editMode:boolean=false;
  userId!:string;
  loading:boolean=false;

  constructor(private activateRoute:ActivatedRoute, private _userService:UserService, private router:Router) { }

  ngOnInit(): void {
    // const id:string='-N91PWLNmM-aj3OrV7Ds';
    

    this.activateRoute.paramMap.subscribe(res=>{
      // const id:string=res.get('id') as string;
      this.userId=res.get('id')!;
      
      this._userService.fetchSingleUser(this.userId).subscribe(res=>{
        this.userDetail=res;
      })
      
    })

    this.activateRoute.queryParamMap.subscribe(qParam=>{
      if(qParam.get('editMode')){
        this.editMode=true;
      }
      else{
        this.editMode=false;
      }
    })
  }

  onEdit(){
    this.editMode=!this.editMode;
  }

  onUpdateUser(){
    this.loading=true;
    console.log(this.userDetail);
    this._userService.updateUser(this.userId, this.userDetail).subscribe(res=>{
      console.log(this.activateRoute.pathFromRoot);
      this.activateRoute.queryParams.subscribe(res=>{
        console.log(res);
        
      })
      this.router.navigate(['./products/users-gallery/',this.userId])
      this.editMode=false;
      this.loading=false;
    })
  }

}
