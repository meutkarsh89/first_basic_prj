import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(res=>{
      console.log(res);
      const id:string=res as string;
      this.jumpTo(id);
    })
  }

  jumpTo(section:string){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }

}
