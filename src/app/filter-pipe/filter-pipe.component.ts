import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.scss']
})
export class FilterPipeComponent implements OnInit {

  productArr = [
    {
      srNo:1,
      name:'Mobile',
      price:'7000',
      avail:'Available'
    },
    {
      srNo:2,
      name:'TV',
      price:'15000',
      avail:'Not Available'
    },
    {
      srNo:3,
      name:'Laptop',
      price:'42000',
      avail:'Available'
    },
    {
      srNo:4,
      name:'Mobile',
      price:'9000',
      avail:'Available'
    },
    
    {
      srNo:5,
      name:'Alexa',
      price:'100',
      avail:'Available'
    },
    {
      srNo:4,
      name:'Tablet',
      price:'5000',
      avail:'Available'
    },
    {
      srNo:4,
      name:'Mobile',
      price:'2000',
      avail:'Available'
    },
    {
      srNo:4,
      name:'Mobile',
      price:'9000',
      avail:'Available'
    },
    {
      srNo:4,
      name:'Alexa',
      price:'50',
      avail:'Available'
    }
  ];

  keyword: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
