import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service';
import {Credit} from '../model/credit';
import {Router} from '@angular/router';
import {TokenService} from '../services/token.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  constructor(private request: RequestService, private route: Router, private tokenService: TokenService) { }

  credits: any ;
  creditUpdated: Credit;
  admin: string;
  ngOnInit(): void {
    this.credits = [];
    this.getAllCredits();
    this.admin = this.tokenService.getAdmin();
  }
  getAllCredits() {
    this.request.getAllCredits().subscribe((response: Credit[]) => {
      this.credits = response;
      console.log(response);
    });
  }

  updateCredit(credit: number, stateCredit: string ){
    // this.request.
    //  this.creditUpdated = ((action.target as HTMLObjectElement).value as Credit);
    // console.log('the user is'  + event.target.value);
    // console.log('the user is'  + this.creditUpdated.userId);

    // console.log('le credit capturer' + (action.target as HTMLObjectElement).id as string);
    console.log('le credit capturer ---------------------------------------- ' + this.credits[1]);
    // console.log('index' + credit);


    // console.log('this is the credit ' + this.credits);
    // this.credits.forEach(element => console.log(' user displayed ' + element.forEach( element2 => console.log(element2.creditState))));
    this.credits[credit].creditState = stateCredit;
    // this.creditUpdated =  this.credits[credit];
    console.log('value of object' + JSON.stringify(this.credits[credit] ) );

    this.request.updatecredit(this.credits[credit]).subscribe( reponse => console.log(reponse));
    this.route.navigateByUrl('/creditList');
  }

}
