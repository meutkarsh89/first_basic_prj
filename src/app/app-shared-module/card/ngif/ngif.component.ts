import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {

  isValid:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isValid = true
  }

}
