import { Component, OnInit, Input } from '@angular/core';
import { basicInternship } from '../../models/student-models';

@Component({
  selector: 'app-student-application-history',
  templateUrl: './student-application-history.component.html',
  styleUrls: ['./student-application-history.component.css']
})
export class StudentApplicationHistoryComponent implements OnInit {

  @Input() studentId: string;
  appliedInternships: Array<basicInternship> = new Array<basicInternship>();


  constructor() { }

  ngOnInit() {

    //MOCK
    this.appliedInternships = [
      {
        position: ".Net Development",
        company: "Endava"
      },
      {
        position: "Java Development",
        company: "Yonder"
      },
      {
        position: "Js Development",
        company: "Evozone"
      },
      {
        position: ".Net Development",
        company: "Endava"
      },
      {
        position: "Java Development",
        company: "Yonder"
      },
      {
        position: "Js Development",
        company: "Evozone"
      }
    ];

  }

}
