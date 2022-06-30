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

  notAllowedNames:Array<string> = ['Utkarsh','Anish'];

  formStatus!:string;

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetail': new FormGroup({
        'userName': new FormControl('', [Validators.required,this.NaNames.bind(this)]),
        'email': new FormControl('',[Validators.required, Validators.email], <AsyncValidatorFn>this.NaEmail),
      }),
      'course': new FormControl('HTML'),
      'sex': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    })

    // this.myReactiveForm.valueChanges.subscribe(value=>{
    //   console.log(value);
      
    // })

    this.myReactiveForm.statusChanges.subscribe(staatus=>{
      console.log(staatus);
      this.formStatus = staatus;
    })

    setTimeout(() => {
      // this.myReactiveForm.setValue({
      //   'userDetail':{
      //     'userName':'utka',
      //     'email':'abc@hgh.com'
      //   },
      //   'course':'HTML',
      //   'sex':'Male',
      //   'skills':[
      //     'RXJS'
      //   ]
      // })

      this.myReactiveForm.patchValue({
        'userDetail':{
          
        'email':'abc@gmail.com'
        }
      })
    }, 1500);

  }

  onSubmit(){
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset({
      'userDetail':{
            'userName':'',
            'email':''
          },
          'course':'HTML',
          'sex':'Male',
          'skills':[
            
          ]
    })
  }

  get skillArray(): FormArray{
    return this.myReactiveForm.get('skills') as FormArray;
  }

  onAddSkill(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(control);
   
  }

  NaNames(control:FormControl){
    if(this.notAllowedNames.indexOf(control.value)!==-1){
      return {'notAllowedName':true};
    }
    else{
      return null
    }
  }

  NaEmail(control:FormControl) : Promise<any> | Observable<any> {
    const naEmailPromise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(control.value === 'abc@gmail.com'){
          resolve({'notAlloweEmail':true})
        }
        else{
          resolve(null)
        }
      }, 5000);
    })
    return naEmailPromise;
  }
}
