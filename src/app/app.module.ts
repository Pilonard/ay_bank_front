import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AyHeaderComponent } from './ay-header/ay-header.component';
import { CreditComponent } from './credit/credit.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { NewCreditComponent } from './new-credit/new-credit.component';
import { HomePageComponent } from './home-page/home-page.component';
import {JwtInterceptor} from './services/jwt.interceptor';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AyHeaderComponent,
    CreditComponent,

    LoginComponent,
    CreditListComponent,
    NewCreditComponent,
    HomePageComponent,
    UserListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
