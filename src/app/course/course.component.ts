import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from '../services/courses/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

   
   /**
     * Déclaration de l'index étudiant à -1
     */
    indexCourse: number = 0;
    faStar = faStar;
    faChevronLeft = faChevronLeft;
  
    /**
      * Constructeur
      * @param {CoursesService} servCours le service d'accès aux données du fichier etudiants.json
      * @param {ActivatedRoute} routeParametres le service d'accès aux routes
      */
    constructor(public servCourses:CoursesService, private routeParametres:ActivatedRoute) { 
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  
    /**
      * Récupérer l'étudiant séléctionné en fonction de son index
      */
    ngOnInit(): void {
      console.log(this.servCourses.listCourses);
      console.log(this.routeParametres);
      // Affiche les données présentent dans la route
      this.routeParametres.params.subscribe(
        parametres => {
          console.log("Paramètres de la route", parametres);
          // Test si le paramètre est dans la route
          if(parametres['i']){
            this.indexCourse = + parametres['i'];
            console.log(this.indexCourse);
            console.log("test" + this.servCourses.listCourses[this.indexCourse].name);
          }
        }
      )
      
    }

}
