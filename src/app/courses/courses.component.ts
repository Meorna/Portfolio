import { Component, OnInit } from '@angular/core';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from '../services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  faStar = faStar;
  faPlus = faPlus;


  constructor(public servCourses:CoursesService) { 
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  ngOnInit(): void {
    this.servCourses.getCoursesFromBack();
  }

}
