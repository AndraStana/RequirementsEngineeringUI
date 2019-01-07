

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentProfileComponent } from './profile/student-profile/student-profile.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { StudentHomepageComponent } from './homepage/student-homepage/student-homepage.component';

const routes: Routes = [

    {
      path: 'student/profile/:id',
      component: StudentProfileComponent,
    },
    {
        path: 'student/homepage/:id',
        component: StudentHomepageComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
