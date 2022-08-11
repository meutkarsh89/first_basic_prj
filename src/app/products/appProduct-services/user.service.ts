import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../app-Product-interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://firstangularapp-lti-default-rtdb.firebaseio.com/secureusers.json';

  constructor(private _http:HttpClient) { }

  addUser(userDetail:user){
    return this._http.post(this.url,userDetail);
  }
  fetchUsers(){
    return this._http.get<user[]>(this.url);
  }

  fetchSingleUser(id:string){
    return this._http.get<user>('https://firstangularapp-lti-default-rtdb.firebaseio.com/secureusers/'+id+'.json');
  }

  updateUser(id:string, userDetail:user){
    return this._http.put('https://firstangularapp-lti-default-rtdb.firebaseio.com/secureusers/'+id+'.json', userDetail);
  }

}

