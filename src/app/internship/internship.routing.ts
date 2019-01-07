

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { InternshipProfileComponent } from './internship-profile/internship-profile.component';

const routes: Routes = [

    {
      path: 'internship/profile/:id',
      component: InternshipProfileComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipRoutingModule { }
