import { Component, OnInit } from '@angular/core';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  faStar = faStar;
  faPlus = faPlus;
  constructor(public servProjects:ProjectsService) { }

  ngOnInit(): void {
  }

}
