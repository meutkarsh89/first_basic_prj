import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.scss']
})
export class TempFormComponent implements OnInit {
  

  @ViewChild('userForm') myform!: NgForm;

  uName!:string;
  defaultCourse:string='Angular';
  submitted:boolean = false;
  formData = {
    userName: '',
    email: '',
    course: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(userForm:NgForm){
    console.log(this.myform);
    console.log(this.myform.value);

    this.submitted=true;
    this.formData.userName = this.myform.value.userDetails.uname;
    this.formData.email= this.myform.value.userDetails.uemail;
    this.formData.course= this.myform.value.course;

    this.myform.reset();
  }

  onSetValue(e: { preventDefault: () => void; }){
    e.preventDefault()
    this.myform.setValue({
      userDetails: {
        uname: 'Utkarsh',
        uemail: 'utk@gmail.com'
      },
      course:'HTML'
    });
    // this.myform.form.patchValue({
    //   userDetails: {
    //     uname: 'Abhay'
    //   }
    // })
  }

}
