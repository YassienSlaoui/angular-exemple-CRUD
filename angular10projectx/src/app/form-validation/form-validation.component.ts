import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm ,Validators} from '@angular/forms';
import { ValidationInput } from '../validateur.validation';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

  constructor() { }
  legObj(email:any){
    console.log(email)
  }
  submit(){

  }
  myForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.maxLength(30),ValidationInput.noSpaceAllowed],ValidationInput.shouldEmailBeUnique),
    password:new FormControl()
  })
  get email(){
    //console.log(this.myForm.controls['email'])
    return this.myForm.controls['email']
  }
  get password(){
    return this.myForm.controls['password']
  }

}
