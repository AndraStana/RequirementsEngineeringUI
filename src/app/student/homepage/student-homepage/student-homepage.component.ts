import { Component, OnInit } from '@angular/core';
import { newsfeedInternship } from '../../models/student-models';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-student-homepage',
  templateUrl: './student-homepage.component.html',
  styleUrls: ['./student-homepage.component.css']
})
export class StudentHomepageComponent implements OnInit {

  newInternships :  Array<newsfeedInternship>;
  filteredInternships: Array<newsfeedInternship>;

  fromDate: Date = new Date();
  toDate: Date = new Date();
  searchText: string = "";

  

  // filterForm = new FormGroup({
  //   fromDate: new FormControl(),
  //   toDate: new FormControl(),
  // });
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'search',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
  }


  ngOnInit() {

    this.initializeList();
    this.filteredInternships = this.newInternships.filter(x=>x);

  }



  fromDateChanged(event: MatDatepickerInputEvent<Date>){
    this.fromDate = event ? event.value : new Date();
    this.applyFilter();

  }

  
  toDateChanged(event: MatDatepickerInputEvent<Date>){
    this.toDate = event ? event.value : new Date();
    this.applyFilter();

  }

  filterSearchChanged(){
    this.applyFilter();

  }


  applyFilter(){

    this.filteredInternships = this.newInternships.filter(x=> x.recruitingStartDate >= this.fromDate && x.recruitingEndDate <=  this.toDate && this.containsSearchText(x));
    
  }

  containsSearchText(internship: newsfeedInternship){
    if(this.searchText =="") {
      return true;
    } 

    return internship.position.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) || internship.company.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
        || internship.description.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase());
          
  }


  initializeList(){
    this.newInternships = [
      {
        position:".Net Developer",
        company:"Endava",
        description : "We are looking for enthusiastic students that are capable of daeling with our work environment such that they will experience what a real job means.",
        recruitingStartDate: new Date('01/02/2019'),
        recruitingEndDate: new Date('01/12/2019'),
        positionPhoto: "assets/images/csharp.png",
        companyPhoto: "assets/images/endava.jpg"
      },
      {
        position:"Java Developer",
        company:"Yonder",
        description : "Starting you IT career isn't quite easy, especially when you're a fresh gratuate student. Our internship is ready to give those students the opportunity to accomodate with the job that they may desire in this industry.",
        recruitingStartDate: new Date('2019-10-01'),
        recruitingEndDate: new Date('2019-12-12'),
        positionPhoto: "assets/images/java.png",
        companyPhoto: "assets/images/yonder.png"
      },
      {
        position:"Js Developer",
        company:"Evozone",
        description : "For a real-word application,the user experience is by far the most important aspect. With a technology like Javascript, combined in frameworks such as React or Angular, you will become a master of UI.",
        recruitingStartDate: new Date('2019-01-02'),
        recruitingEndDate: new Date('2019-01-27'),
        positionPhoto: "assets/images/js.png",
        companyPhoto: "assets/images/evozon.jpg"
      },
      {
        position:".Net Developer",
        company:"Endava",
        description : "We are looking for enthusiastic students that are capable of daeling with our work environment such that they will experience what a real job means.",
        recruitingStartDate: new Date('2019-10-01'),
        recruitingEndDate: new Date('2019-12-12'),
        positionPhoto: "assets/images/csharp.png",
        companyPhoto: "assets/images/endava.jpg"
      },
      {
        position:"Java Developer",
        company:"Yonder",
        description : "Starting you IT career isn't quite easy, especially when you're a fresh gratuate student. Our internship is ready to give those students the opportunity to accomodate with the job that they may desire in this industry.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date(),
        positionPhoto: "assets/images/java.png",
        companyPhoto: "assets/images/yonder.png"
      },
      {
        position:"Js Developer",
        company:"Evozone",
        description : "For a real-word application,the user experience is by far the most important aspect. With a technology like Javascript, combined in frameworks such as React or Angular, you will become a master of UI.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date(),
        positionPhoto: "assets/images/js.png",
        companyPhoto: "assets/images/evozon.jpg"
      },
      {
        position:".Net Developer",
        company:"Endava",
        description : "We are looking for enthusiastic students that are capable of daeling with our work environment such that they will experience what a real job means.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date(),
        positionPhoto: "assets/images/csharp.png",
        companyPhoto: "assets/images/endava.jpg"
      },
      {
        position:"Java Developer",
        company:"Yonder",
        description : "Starting you IT career isn't quite easy, especially when you're a fresh gratuate student. Our internship is ready to give those students the opportunity to accomodate with the job that they may desire in this industry.",
        recruitingStartDate: new Date(),
        recruitingEndDate: new Date(),
        positionPhoto: "assets/images/java.png",
        companyPhoto: "assets/images/yonder.png"
      },
      {
        position:"Js Developer",
        company:"Evozon",
        description : "For a real-word application,the user experience is by far the most important aspect. With a technology like Javascript, combined in frameworks such as React or Angular, you will become a master of UI.",
        recruitingStartDate: new Date('2019-02-12'),
        recruitingEndDate: new Date('2019-02-27'),
        positionPhoto: "assets/images/js.png",
        companyPhoto: "assets/images/evozon.jpg"
      }
    ];
  }

}
