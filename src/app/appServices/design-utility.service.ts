import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  newsPortal:string = 'Telegraph';
  newsLists=[
    {name:'Telegraph', id:'001'},
    {name:'HT', id:'034'},
    {name:'TOI', id:'022'},
    {name:'WION', id:'100'}
  ]

  url='https://jsonplaceholder.typicode.com/users';


  // userName = new Subject<string>();
  userName = new BehaviorSubject<string>('Utkarsh');

  constructor(private http: HttpClient) { }

  subscribetoNews(){
    alert('News channel is subscribed. Thanks!');
  }

  getProducts():Observable<any>{
    return this.http.get(this.url);
  }
}
