import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProcessCreditService} from './services/process-credit.service';
import {CreditComponent} from './credit/credit.component';
import {CreditListComponent} from './credit-list/credit-list.component';
import {LoginComponent} from './login/login.component';

import {HomePageComponent} from './home-page/home-page.component';
import {AuthGuard} from './guard/auth.guard';
import {LoginGuard} from './guard/login.guard';
import {UserListComponent} from './user-list/user-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/process', pathMatch: 'full'},
  {path: 'process', component: CreditComponent, canActivate: [AuthGuard]},
  {path: 'creditList', component: CreditListComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},

  {path: '**', component: CreditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
