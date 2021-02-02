import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '../services/projects/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  /**
     * Déclaration de l'index étudiant à -1
     */
    indexProject: number = 0;
    faStar = faStar;
    faChevronLeft = faChevronLeft;
  
    /**
      * Constructeur
      * @param {CoursesService} servCours le service d'accès aux données du fichier etudiants.json
      * @param {ActivatedRoute} routeParametres le service d'accès aux routes
      */
    constructor(public servProjects:ProjectsService, private routeParametres:ActivatedRoute) { }
  
    /**
      * Récupérer l'étudiant séléctionné en fonction de son index
      */
    ngOnInit(): void {
      console.log(this.servProjects.listProjects);
      console.log(this.routeParametres);
      // Affiche les données présentent dans la route
      this.routeParametres.params.subscribe(
        parametres => {
          console.log("Paramètres de la route", parametres);
          // Test si le paramètre est dans la route
          if(parametres['i']){
            this.indexProject = + parametres['i'];
            console.log(this.indexProject);
            console.log("test" + this.servProjects.listProjects[this.indexProject].name);
          }
        }
      )
      
    }

}
