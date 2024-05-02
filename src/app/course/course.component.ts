import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
  }
  course=[
    {'id':1, 'name':'Learn Angular', 'description':'Angular Description', 'image':'../../assets/angular.jpg'},
    {'id':2, 'name':'Learn Typescript', 'description':'Typescript Description', 'image':'../../assets/typescript.jpg'},
    {'id':3, 'name':'Learn Nodejs', 'description':'Nodejs Description', 'image':'../../assets/nodejs.jpg'},
    {'id':4, 'name':'Learn Reactjs', 'description':'Reactjs Description', 'image':'../../assets/reactjs.jpg'}
  ]
}