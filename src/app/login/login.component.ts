import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { loginInfo } from '../models/loginInfo';

import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { SpinnerService } from '../services/spinner/spinner.service';
import { Router } from '@angular/router';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder,
    private spinnerService: SpinnerService, private router: Router, private cookieService: CookieService) {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit(): void {
  }

  public errorMessage: string;

  public onSubmitClick(): void {
    this.spinnerService.setSpinnerValue(true);

    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;

    const loginInfo: loginInfo = {
      userName: userName,
      password: password
    }

    this.loginService.login(loginInfo).subscribe((result) => {
      this.loginForm.reset();
      this.cookieService.login(loginInfo.userName, result.token);
      this.router.navigate(['/home']);
      this.spinnerService.setSpinnerValue(false);
    },
      (error) => {
        this.errorMessage = 'Error while logging in, please try later!';
      })
  }

  get userName() { return this.loginForm.get('userName'); }
  get password() { return this.loginForm.get('password'); }
}
