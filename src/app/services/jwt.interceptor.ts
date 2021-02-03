import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from './token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('voici la requette' + request.urlWithParams);
    console.log('------------------request' + request.method);
    // if (request.urlWithParams.includes('credit')){
    if (
      request.urlWithParams.includes('http://localhost:8080/credit')
      && ((request.method === 'GET') || (request.method === 'POST'))){
      console.log('the url contains credit');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenService.getToken()}`
        }
      });
    }
    else {
      console.log('the url do not contains credit');
      request = request.clone();
    }
    return next.handle(request);
  }
}
