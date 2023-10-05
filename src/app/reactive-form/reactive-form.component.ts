import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(10), Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  get nameControl(){
    return this.userForm.controls['name'];
  }
  get emailControl(){
    return this.userForm.controls['email'];
  }
  get phoneControl(){
    return this.userForm.controls['phone'];
  }
  get addressControl(){
    return this.userForm.controls['address'];
  }
  
  onSubmit(): void{

    if (this.userForm.invalid){
      alert('Este formulario es invalido')
    } else {
      console.log(this.userForm.value)
    }
  };
}
