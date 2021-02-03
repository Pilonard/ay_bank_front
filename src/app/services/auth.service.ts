import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {BehaviorSubject} from 'rxjs';
import {TokenService} from './token.service';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  typeC = 'Agriculturalloans';
  request2 = {
    email: 'abbadi.youssef@gmail.com',
    password: 'abbadi'
  };
  request = {
    firstName: 'youssef',
    lastName: 'abbadi',
    email: 'abbadi.youssef3wwpp@gmail.com',
    password: 'abbadi',
    imgProfile: 'toto.fcom',
    credits: [ ]
  };
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  private loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());
  authStatus = this.loggedIn.asObservable();



  login(data: {email: string, password: string}){
    // console.log(data);
    // return this.http.post('http://localhost:8080/user', this.request);
    return this.http.post('http://localhost:8080/user/login', data);
    // return this.http.post('http://localhost:8080/credit/test', data);
    // return this.http.get('http://localhost:8080/credit/annuityP/300000/' + this.typeC + '/120');
  }
  signUp(data: User){
    return this.http.post('http://localhost:8080/user', data);
  }

  changeStatus(value: boolean){
    this.loggedIn.next(value);
  }



}
