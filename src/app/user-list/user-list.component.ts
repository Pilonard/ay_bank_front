import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {Credit} from '../model/credit';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private request: RequestService) { }
  users: User[] = [];

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.request.getAllUser().subscribe((response: User[]) => {
      this.users = response;
      console.log('users:' + response);
    });
  }


}
