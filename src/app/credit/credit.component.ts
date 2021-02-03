import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Credit} from '../model/credit';
import {ProcessCreditService} from '../services/process-credit.service';
import {RequestService} from '../services/request.service';
import {log} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  action = 'annuityP';
  creditDemandForm: FormGroup;
  creditForm: FormGroup;
  submitted = false;
  typeCredits = [
    'Real estate loans',
    'Financial institution loans',
    'Agricultural loans',
    'Commercial and industrial loans',
    'Loans to individuals'
  ];

  credit = new Credit('', '', '', '');
  creditPersist: Credit;
  typeCreditTrim: string;

  constructor(private webService: ProcessCreditService, private persistService: RequestService, private route: Router) { }

  ngOnInit(): void {
    this.creditDemandForm = new FormGroup({
      salary : new FormControl(null, [Validators.required]),
    });

    this.creditForm = new FormGroup({
      annuity : new FormControl(null, [Validators.required]),
      capital : new FormControl(null, [Validators.required]),
      typeCredit : new FormControl(this.typeCredits[0], [Validators.required]),
      duration : new FormControl(null, [Validators.required]),

    });



  }

  onSubmit(){
    this.typeCreditTrim = this.creditForm.value.typeCredit.replace(/ /g, '');
    this.credit = {
      annuity : this.creditForm.value.annuity,
      capital : this.creditForm.value.capital,
      duration : this.creditForm.value.duration,
      typeCredit : this.typeCreditTrim
    };
    console.log('tester type Credit ' + this.creditForm.value.typeCredit.trim());

    this.credit = this.webService.process(this.credit, this.action);

    this.creditForm.reset();
    this.submitted = true;
  }
  onPersistCredit(){
    this.credit.salary = this.creditDemandForm.value.salary;
    this.persistService.postCredit(this.credit).subscribe(response => {
      console.log(response);
    }, error => console.log(error),
      () => this.route.navigateByUrl('/creditList')
      );
  }

  changeAction(action: Event){
    this.submitted = false;
    this.creditForm.reset();
    this.credit = new Credit('' , '' , '' , '');
    this.action = ((action.target as HTMLObjectElement).id as string) ;
    console.log((action.target as HTMLObjectElement).id);
  }


}
