import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {

  para:string = 'hello there.';
  today = new Date();

  list:Array<any> = [
    'India Today',
    'Washington Times',
    'Hindustan Times',
    'Deccan Herald',
    'WION',
    'ABC Telecast',
    'France24 News'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
