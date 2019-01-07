import { Component, OnInit } from '@angular/core';
import { newsfeedInternship } from '../../models/student-models';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-student-homepage',
  templateUrl: './student-homepage.component.html',
  styleUrls: ['./student-homepage.component.css']
})
export class StudentHomepageComponent implements OnInit {

  newInternships :  Array<newsfeedInternship>;
  filteredInternships: Array<newsfeedInternship>;

  constructor() { }

  ngOnInit() {

    this.newInternships = [
      {
        position:".Net Developer",
        company:"Endava",
        description : "We are looking for enthusiastic students that are capable of daeling with our work environment such that they will experience what a real job means.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date()

      },
      {
        position:"Java Developer",
        company:"Yonder",
        description : "Starting you IT career isn't quite easy, especially when you're a fresh gratuate student. Our internship is ready to give those students the opportunity to accomodate with the job that they may desire in this industry.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date()
      },
      {
        position:"Js Developer",
        company:"Evozone",
        description : "For a real-word application,the user experience is by far the most important aspect. With a technology like Javascript, combined in frameworks such as React or Angular, you will become a master of UI.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date()
      },
      {
        position:".Net Developer",
        company:"Endava",
        description : "We are looking for enthusiastic students that are capable of daeling with our work environment such that they will experience what a real job means.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date()
      },
      {
        position:"Java Developer",
        company:"Yonder",
        description : "Starting you IT career isn't quite easy, especially when you're a fresh gratuate student. Our internship is ready to give those students the opportunity to accomodate with the job that they may desire in this industry.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date()
      },
      {
        position:"Js Developer",
        company:"Evozone",
        description : "For a real-word application,the user experience is by far the most important aspect. With a technology like Javascript, combined in frameworks such as React or Angular, you will become a master of UI.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date()
      },
      {
        position:".Net Developer",
        company:"Endava",
        description : "We are looking for enthusiastic students that are capable of daeling with our work environment such that they will experience what a real job means.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date()
      },
      {
        position:"Java Developer",
        company:"Yonder",
        description : "Starting you IT career isn't quite easy, especially when you're a fresh gratuate student. Our internship is ready to give those students the opportunity to accomodate with the job that they may desire in this industry.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date()
      },
      {
        position:"Js Developer",
        company:"Evozone",
        description : "For a real-word application,the user experience is by far the most important aspect. With a technology like Javascript, combined in frameworks such as React or Angular, you will become a master of UI.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date()
      
      }

    ]


    this.filteredInternships = this.newInternships.filter(x=>x);

  }

}
