import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  newsLetterName:string = 'Telegraph';
  url = 'https://jsonplaceholder.typicode.com/users';

  newsLists=[
    {name:'Telegraph', id:'001'},
    {name:'HT', id:'034'},
    {name:'TOI', id:'022'},
    {name:'WION', id:'100'}
  ]

  // userName = new Subject<any>();
  userName = new BehaviorSubject<string>('UTK');


  constructor(private http:HttpClient) { }

  displayMsg(){
    alert('Your subcription is started. Thanks a lot!!!!!!!!!')
  }

  getData(): Observable<any>{
    return this.http.get(this.url);
  }
}
