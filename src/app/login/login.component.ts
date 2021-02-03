import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {TokenService} from '../services/token.service';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  userSignIn: User;

  signInForm = new FormGroup({
    firstName: new FormControl(null,
      [ Validators.required ]),
    lastName: new FormControl(null,
      [ Validators.required ]),
    emailS: new FormControl(null,
      [ Validators.required , Validators.email]),
    passwordS: new FormControl(
      null,
      [ Validators.minLength(4), Validators.maxLength(12)]),
    imgProfile: new FormControl(null,
      [ Validators.required ])
  });

  loginForm = new FormGroup({
    email: new FormControl(null,
      [ Validators.required , Validators.email]),
    password: new FormControl(
      null,
      [ Validators.minLength(4), Validators.maxLength(12)])
  });
  //  private accountService: AccountService,
  constructor( private auth: AuthService,
               private  tokenService: TokenService,
               private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    this.userSignIn = new User(
      this.signInForm.value.firstName,
      this.signInForm.value.lastName,
      this.signInForm.value.emailS,
      this.signInForm.value.passwordS,
      this.signInForm.value.imgProfile,
      []);
    console.log(this.userSignIn);
    this.auth.signUp(this.userSignIn).subscribe(response => {
      console.log(response);
    },
        error => { console.log(error); },
      () => {
        this.auth.login({
          email: this.signInForm.value.emailS,
          password: this.signInForm.value.passwordS
        }).subscribe(response => {
          console.log(response);
          this.handleResponse(response);
        });
    }
      );

  }
  login() {

    this.auth.login(this.loginForm.value).subscribe(response => {
      console.log(response);
      this.handleResponse(response);
    });
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  handleResponse(response){
    this.tokenService.handle(response);
    this.auth.changeStatus(true);
    this.router.navigateByUrl('/process');
  }
}
