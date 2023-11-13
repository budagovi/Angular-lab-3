import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { User } from '../user';
import { validateName } from '../username.validator';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css'],
})
export class AppFormComponent {

  @Output() addNewUser = new EventEmitter<User>;

  userForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, validateName('Admin')]),
    lastname: new FormControl('', {nonNullable: true, validators: Validators.required}),
    gender: new FormControl('', {nonNullable: true, validators: Validators.required}),
    address: new FormGroup({
      country: new FormControl('', {nonNullable: true, validators: Validators.required}),
      city: new FormControl('', {nonNullable: true, validators: Validators.required}),
      street: new FormControl('', {nonNullable: true, validators: Validators.required})
    }),
    mobileNum: new FormControl('', {nonNullable: true, validators: Validators.required}),
    dob: new FormControl(new Date(''), {nonNullable: true, validators: Validators.required}),
    position: new FormControl('JR. .NET Developer', {nonNullable: true, validators: Validators.required}),
    subscription: new FormControl(false, {nonNullable: true}),
    email: new FormArray([]),
  })

  get emails() {
    return  (<FormArray>this.userForm.get('email')).controls
  }

  subCheck = () => {
      if(this.userForm.get('subscription')!.value)
        this.addEmailControl();
      else 
        (<FormArray>this.userForm.get('email')).clear();
  }

  addEmailControl = () => {
    const control = new FormControl('', {nonNullable: true, validators: Validators.required});
    (<FormArray>this.userForm.get('email')).push(control);
  }

  onSubmit = () => {
    const newUser:User = {
      firstname: this.userForm.get('firstname')!.value,
      lastname: this.userForm.get('lastname')!.value,
      gender: this.userForm.get('gender')!.value,
      address: {
        country: this.userForm.get('address.country')!.value,
        city: this.userForm.get('address.city')!.value,
        street: this.userForm.get('address.street')!.value
      },
      mobileNum: this.userForm.get('mobileNum')!.value,
      dob: new Date(this.userForm.get('dob')!.value),
      position: this.userForm.get('position')!.value,
      subscription: this.userForm.get('subscription')!.value,
      email: (<FormArray>this.userForm.get('email'))!.value
    }
    
    this.addNewUser.emit(newUser);
    this.userForm.reset();
  }
}
