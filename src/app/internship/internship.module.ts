import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InternshipProfileComponent } from './internship-profile/internship-profile.component';
import { InternshipRoutingModule } from './internship.routing';



@NgModule({
  declarations: [
    InternshipProfileComponent,
  ],
  imports: [
    BrowserModule,
    InternshipRoutingModule,

  ],
  exports: [
    InternshipProfileComponent,
  ],
  providers: []
})
export class InternshipModule { }
