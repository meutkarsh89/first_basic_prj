import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.scss']
})
export class TempFormComponent implements OnInit {

  @ViewChild('userForm') myForm!:NgForm;

  defaultCourse: string = 'HTML';
  uname:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(userForm:NgForm){
    console.log(this.myForm);
    console.log(this.myForm.value.userDetails.uname);
    
    // console.log(userForm);
    // console.log(userForm.value);
    
    
  }

  onSetData(e: { preventDefault: () => void; }){
    e.preventDefault();
    // this.myForm.setValue({
    //   userDetails:{
    //     uname:'Raghav',
    //     email:'abc@gmail.com'
    //   },
    //   course:'JavaScript'
    // })
    this.myForm.form.patchValue({
      course: 'JavaScript'
    })
  }

}
