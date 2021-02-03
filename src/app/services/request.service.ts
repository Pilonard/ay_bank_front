import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Credit} from '../model/credit';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getAllCredits(){
    return this.http.get('http://localhost:8080/credit');
  }
  getAllUser(){
    return this.http.get('http://localhost:8080/user');
  }
  updatecredit(data: Credit){
    return this.http.put('http://localhost:8080/credit', data);
  }
  postCredit(data: Credit){
    return this.http.post('http://localhost:8080/credit', data);
  }
}
