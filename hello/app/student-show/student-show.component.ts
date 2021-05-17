import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.css']
})
export class StudentShowComponent implements OnInit {

  students = [
    new Student(1,'Raja','Thakur','Delhi',8.0),
    new Student(2,'Abhinav','Kumar','Patna',8.6),
    new Student(3,'Nishant','Kumar','Banglore',8.0),
    new Student(4,'Prashant','Kumar','Mumbai',8.1),
    new Student(5,'Ramakant','Gaurav','Delhi',8.4),
    new Student(6,'Rajan','Das','Kolkata',9.2),
    new Student(7,'Rajesh','Singha','Chennai',7.0),
    new Student(8,'Rajat','Roy','Pune',8.7),
    new Student(9,'Raj','Singh','Delhi',8.9),
    new Student(10,'Ramesh','Kumar','Delhi',9.0),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
