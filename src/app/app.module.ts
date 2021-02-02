import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursComponent } from './cours/cours.component';

import { CoursesService } from './services/courses/courses.service';
import { ProjectsService } from './services/projects/projects.service';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CoursesComponent,
    ProjectsComponent,
    ProfileComponent,
    CoursComponent,
    ProjectComponent,
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
  ],
  providers: [
    CoursesService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }