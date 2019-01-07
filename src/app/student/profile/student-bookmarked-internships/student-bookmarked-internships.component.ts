import { Component, OnInit, Input } from '@angular/core';
import { basicInternship } from '../../models/student-models';

@Component({
  selector: 'app-student-bookmarked-internships',
  templateUrl: './student-bookmarked-internships.component.html',
  styleUrls: ['./student-bookmarked-internships.component.css']
})
export class StudentBookmarkedInternshipsComponent implements OnInit {

  @Input() studentId: string;
  bookmarkedInternships: Array<basicInternship> = new Array<basicInternship>();

  constructor() { }

  ngOnInit() {

  //MOCK
  this.bookmarkedInternships = [
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
