import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentProfileComponent } from './profile/student-profile/student-profile.component';
import { StudentRoutingModule } from './student-routing';
import { StudentApplicationHistoryComponent } from './profile/student-application-history/student-application-history.component';
import { StudentBookmarkedInternshipsComponent } from './profile/student-bookmarked-internships/student-bookmarked-internships.component';
import { StudentCvComponent } from './profile/student-cv/student-cv.component';




import { HttpClientModule } from '@angular/common/http'; 
import { AngularSvgIconModule } from 'angular-svg-icon';
import { StudentHomepageComponent } from './homepage/student-homepage/student-homepage.component';
import { SharedModule } from '../shared/share.module';



@NgModule({
  declarations: [
    StudentProfileComponent,
    StudentApplicationHistoryComponent,
    StudentBookmarkedInternshipsComponent,
    StudentCvComponent,
    StudentHomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule,
    StudentRoutingModule,
    SharedModule,


  ],
  exports: [
    StudentProfileComponent
  ],
  providers: []
})
export class StudentModule { }
