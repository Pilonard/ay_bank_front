import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Credit} from '../credit/credit';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  url = '';
  getCreditResponse: Credit;
  constructor(private http: HttpClient) { }

  process(credit: Credit, action: string){
    this.url = 'http://localhost:8080/credit/';
    this.getCreditResponse = credit;
    switch (action) {
      case 'annuiteP': this.url += action + '/' + credit.capital + '/' + credit.taux + '/' + credit.duree;
                       this.http.get<string>(this.url).subscribe(
                        responseData => { this.getCreditResponse.annuite = responseData; }
                      );
                       break;
      case 'capitalP': this.url += action + '/' + credit.annuite + '/' + credit.taux + '/' + credit.duree;
                       this.http.get<string>(this.url).subscribe(
                          responseData => { this.getCreditResponse.capital = responseData; }
                        );
                       break;
      case 'dureeP':   this.url += action + '/' + credit.capital + '/' + credit.annuite + '/' + credit.taux;
                       this.http.get<string>(this.url).subscribe(
                        responseData => { this.getCreditResponse.taux = responseData; }
                       );
                       break;
    }
    console.log(this.url);
    return this.getCreditResponse;


  }



}
