import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AyHeaderComponent } from './ay-header/ay-header.component';
import { CreditComponent } from './credit/credit.component';
import { ConsultingComponent } from './consulting/consulting.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {WebService} from './service/web.service';

@NgModule({
  declarations: [
    AppComponent,
    AyHeaderComponent,
    CreditComponent,
    ConsultingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
