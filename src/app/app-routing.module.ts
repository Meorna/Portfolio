import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: "", component: ProfileComponent},
  { path:"courses", component:CoursesComponent, children:[
    { path:"", component:ProfileComponent},
    { path:"course", component: CoursComponent}
  ]},
  { path:"course/:i", component:CoursComponent},

  { path: "projects", component: ProjectsComponent, children:[
    { path:"", component:ProfileComponent},
    { path:"project", component: ProjectComponent}
  ]},
  { path:"project/:i", component:ProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
