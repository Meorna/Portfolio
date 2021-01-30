import { Component, OnInit } from '@angular/core';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { CoursService } from '../services/cours/cours.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  faStar = faStar;
  faPlus = faPlus;

  constructor(public servCourses:CoursService) { }

  ngOnInit(): void {
  }

}
