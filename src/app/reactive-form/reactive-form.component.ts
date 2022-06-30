import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm!:FormGroup;

  genders=[
    {id:1, value:'Male'},
    {id:2, value:'Female'},
  ];

  NaUsers:Array<string> = ['Utkarsh','Anish'];

  formStatus!:string;

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'user': new FormControl('',[Validators.required, this.NaNames.bind(this)]),
        'email': new FormControl('',[Validators.required, Validators.email], <AsyncValidatorFn>this.naEmail),
      }),
      'course': new FormControl('JavaScript'),
      'gender': new FormControl('Female'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
       
      ])
    })
    // this.myReactiveForm.valueChanges.subscribe(value=>{
    //   console.log(value);     
    // })
    this.myReactiveForm.statusChanges.subscribe(status=>{
      console.log(status);
      this.formStatus=status;
    });

    setTimeout(() => {
      // this.myReactiveForm.setValue({
      //   'userDetails':{
      //     'user':'utkarsh',
      //     'email':'abc@xyz.com'
      //   },
      //   'course':'HTML',
      //   'gender':'Female',
      //   'skills':[
      //     'RXJS'
      //   ]
      // })
      this.myReactiveForm.patchValue({
        'userDetails':{
          
          'email':'abc@xyz.com'
        }
      })
    }, 1500);
  }

  get skillsArr() : FormArray{
    return this.myReactiveForm.get('skills') as FormArray;
  }

  onSubmit(){
    console.log(this.myReactiveForm);
    // this.myReactiveForm.reset();
    this.myReactiveForm.reset({
      'userDetails':{
            'user':'',
            'email':''
          },
          'course':'JavaScript',
          'gender':'Female',
          'skills':[
            ''
          ]
    });
  }

  onAddSkill(e: { preventDefault: () => void; }){
    e.preventDefault();
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(control);
  }

  NaNames(control:FormControl){
    if(this.NaUsers.indexOf(control.value)!==-1){
      return {'notAllowedUser':true}
    }
    else{
      return null
    }
  }

  naEmail(control: FormControl): Promise<any> | Observable<any>{
    const myResponse = new Promise<any>((resolve, reject) =>{
      setTimeout(() => {
        if(control.value === 'abc@gmail.com'){
          resolve({'notAllowedEmail':true});
        }
        else{
          resolve(null);
        }
      }, 1500);
    })
    return myResponse;
  }
}
