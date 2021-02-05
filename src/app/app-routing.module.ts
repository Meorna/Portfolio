import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:"", component: ProfileComponent},
  { path:"resume", component: ResumeComponent},
  { path:"courses", component:CoursesComponent},
  { path:"course/:i", component:CourseComponent},

  { path: "projects", component: ProjectsComponent},
  { path:"project/:i", component:ProjectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
