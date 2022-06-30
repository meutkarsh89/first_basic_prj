import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {

  myVal:string = 'this is testing for pipe';

  list:Array<any> = [
    'India Today',
    'Washington Times',
    'Hindustan Times',
    'Deccan Herald',
    'WION',
    'ABC Telecast',
    'France24 News'
  ]

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
