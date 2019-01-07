import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-cv',
  templateUrl: './student-cv.component.html',
  styleUrls: ['./student-cv.component.css']
})
export class StudentCvComponent implements OnInit {

  @Input() showCV = false;
  @Input() studentId :string;

  constructor() { }

  ngOnInit() {
  }

  //TODO impelemnt this
  downloadCV(){
    console.log("Download CV FOR THe user with the id " + this.studentId);
  }

  uploadCV(){
    console.log("Upload CV FOR THe user with the id " + this.studentId);
  }

}
