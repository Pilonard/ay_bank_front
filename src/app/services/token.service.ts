import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  /*
  insert/modify token and id into localStorage
   */

  set(data: any){
    localStorage.setItem('token', data.token);
    localStorage.setItem('id', data.id);
    localStorage.setItem('lastName', data.lastName);
    localStorage.setItem('firstName', data.firstName);
    localStorage.setItem('admin', data.admin);
  }


  handle(data: any){
    this.set(data);
  }
  /*
  get the token and id from local storage
   */
  getToken(){
    return localStorage.getItem('token');
  }
  getId(){
    return localStorage.getItem('id');
  }
  getAdmin(){
    return localStorage.getItem('admin');
  }
  getFirstName(){
    return localStorage.getItem('firstName');
  }
  getLastName(){
    return localStorage.getItem('lastName');
  }
  /*
  remove token and id from local storage
   */
  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('lastName');
    localStorage.removeItem('firstName');
    localStorage.removeItem('admin');

  }

  /*
  token contain payload , we can decode it with the method atob (asci to binary) and parse it to Json
   */
  decode(payload){
    console.log(payload);
    // asqi to binary atob:
    return JSON.parse(atob(payload));
  }

  /*
  get the payload from the token and decode it with decode method
   */
  payload(token){
    const payload = token.split('.')[1];
    console.log('payload', payload);
    return this.decode(payload);
  }
  /*
  this function verify tha validity of the token , it conpare the id in localStorage with the id in the payload
   */
  isValid(){
    const token = this.getToken();
    const id = this.getId();
    // if token exist in local storage
    if (token){
      const  payload = this.payload(token);
      if (payload){
        return id === payload.id;
      }
    }
    return false;
  }

  getInfo() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      return payload ? payload : null;
    }
    return null;
  }

  loggedIn(){
    return this.isValid();
  }

  /*
  behavior subject is like session variable, the content of this variable will accessed from all components
   */


}
