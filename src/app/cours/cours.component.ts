import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft, faChevronLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from '../services/courses/courses.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
 
   /**
     * Déclaration de l'index étudiant à -1
     */
   indexCours: number = 0;
   faStar = faStar;
   faChevronLeft = faChevronLeft;
 
   /**
     * Constructeur
     * @param {CoursesService} servCours le service d'accès aux données du fichier etudiants.json
     * @param {ActivatedRoute} routeParametres le service d'accès aux routes
     */
   constructor(public servCourses:CoursesService, private routeParametres:ActivatedRoute) { }
 
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
           this.indexCours = + parametres['i'];
           console.log(this.indexCours);
           console.log("test" + this.servCourses.listCourses[this.indexCours].name);
         }
       }
     )
     
   }
}
