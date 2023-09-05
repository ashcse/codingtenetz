import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../services/spinner/spinner.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private spinnerService: SpinnerService) { 
      this.registerForm = this.formBuilder.group({
        emailAddress: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      });
    }
    
  public registerForm: FormGroup;

  ngOnInit(): void {
  }

  get emailAddress() { return this.registerForm.get('emailAddress');}
  
  get password() { return this.registerForm.get('password');}

  get phoneNumber() { return this.registerForm.get('phoneNumber');}

  get confirmPassword() { return this.registerForm.get('confirmPassword');}


}
