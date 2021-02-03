import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {TokenService} from '../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ay-header',
  templateUrl: './ay-header.component.html',
  styleUrls: ['./ay-header.component.css']
})
export class AyHeaderComponent implements OnInit {

  currentUser: null;
  firstName = '';
  lastName = '';
  admin: string ;
  constructor( private auth: AuthService, private token: TokenService, private route: Router) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(response => {
    this.currentUser = this.token.getInfo();
    this.firstName = this.token.getFirstName();
    this.lastName = this.token.getLastName();
    this.admin =  this.token.getAdmin();
    });

  }

  logout(): void {
    this.token.remove();
    this.auth.changeStatus(false);
    this.route.navigateByUrl( '/login');
  }


}
