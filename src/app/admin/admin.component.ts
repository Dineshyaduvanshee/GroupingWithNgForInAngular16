import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  personForm!:FormGroup ;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.personForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required]
      })
    });
  }
  // onSubmit(){
  //   console.log("!!Form Submitted!!");
  //   console.log(this.personForm.controls['firstName'].value);
  //   console.log(this.personForm.controls['lastName'].value);
  //   console.log(this.personForm.controls['address'].value);
  //   console.log(this.personForm.controls['street'].value);
  //   console.log(this.personForm.controls['city'].value);
  //   console.log(this.personForm.controls['zip'].value);
    
  // }
  onSubmit(): void {
    console.log("!!Form Submitted!!");
    console.log(this.personForm.controls['firstName'].value);
    console.log(this.personForm.controls['lastName'].value);
    
    // Access the nested form group 'address'
    const addressGroup = this.personForm.get('address') as FormGroup;
  
    // Check if 'addressGroup' is not null or undefined before accessing its controls
    if (addressGroup) {
      console.log(addressGroup.controls['street'].value);
      console.log(addressGroup.controls['city'].value);
      console.log(addressGroup.controls['zip'].value);
    }
  }
  

}
