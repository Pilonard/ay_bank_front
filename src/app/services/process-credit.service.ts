import { Injectable } from '@angular/core';
import {Credit} from '../model/credit';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessCreditService {
  url = '';
  getCreditResponse: Credit;
  constructor(private http: HttpClient) { }

  process(credit: Credit, action: string){
    this.url = 'http://localhost:8080/credit/';
    this.getCreditResponse = credit;
    switch (action) {
      case 'annuityP': this.url += action + '/' + credit.capital + '/' + credit.typeCredit.trim() + '/' + credit.duration;
                       this.http.get<string>(this.url).subscribe(
          responseData => { this.getCreditResponse.annuity = responseData; }
        );
                       break;
      case 'capitalP': this.url += action + '/' + credit.annuity + '/' + credit.typeCredit.trim()  + '/' + credit.duration;
                       this.http.get<string>(this.url).subscribe(
          responseData => { this.getCreditResponse.capital = responseData; }
        );
                       break;
      case 'durationP':   this.url += action + '/' + credit.annuity  + '/' + credit.capital + '/' + credit.typeCredit.trim() ;
                          this.http.get<string>(this.url).subscribe(
          responseData => { this.getCreditResponse.typeCredit = responseData; }
        );
                          break;
    }
    console.log(this.url);
    return this.getCreditResponse;


  }



}
