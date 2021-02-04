import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { CoursesService } from './services/courses/courses.service';
import { ProjectsService } from './services/projects/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    FooterComponent,
    MenuComponent,
    ProfileComponent,
    ProjectComponent,
    ProjectsComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({ 
      loader: { 
        provide: TranslateLoader, 
        useFactory: (http: HttpClient) => { 
          return new TranslateHttpLoader(http, "./assets/", ".json"); 
        },
        deps: [HttpClient], 
      }, 
    }),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    CoursesService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }