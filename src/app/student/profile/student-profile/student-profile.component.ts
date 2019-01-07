import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student-models';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  student: Student = new Student();



  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    this.student.id = this.route.snapshot.params['id'];

    //this.student = getById(this.student.id)

    //MOCK
    this.student.firstName = 'Gerogel Mihai';
    this.student.lastName = 'Pop' ;
    this.student.age = 21;
    this.student.gender = 0;
    this.student.address = 'Cluj-Napoca,County Cluj, Romania, Str. Teleroman, Nr. 28 ';
    this.student.description = 'Ambitious student, looking for an internship in order to grow and later become an experienced programmer';
    this.student.hasCV = true;
  }
}
