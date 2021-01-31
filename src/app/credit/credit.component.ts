import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WebService} from '../service/web.service';
import {Credit} from './credit';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  action = 'annuiteP';
  creditForm: FormGroup;
  submitted = false;
  credit = new Credit('', '', '', '');


  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.creditForm = new FormGroup({
      annuite : new FormControl(null, [Validators.required]),
      capital : new FormControl(null, [Validators.required]),
      taux : new FormControl(null, [Validators.required]),
      duree : new FormControl(null, [Validators.required]),

    });



  }

  onSubmit(){

    this.credit = {
      annuity : this.creditForm.value.annuity,
      capital : this.creditForm.value.capital,
      duration : this.creditForm.value.duration,
      typeCredit : this.creditForm.value.typeCredit
    };

    this.credit = this.webService.process(this.credit, this.action);

    this.creditForm.reset();
    this.submitted = true;
  }

  changeAction(action: Event){
    this.submitted = false;
    this.creditForm.reset();
    this.credit = new Credit('' , '' , '' , '');
    this.action = ((action.target as HTMLObjectElement).id as string) ;
    console.log((action.target as HTMLObjectElement).id);
  }


}
