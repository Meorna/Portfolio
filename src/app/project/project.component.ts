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

    /*public chartType: string = 'doughnut';

    public chartDatasets: Array<any> = [
      { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
    ];

    public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

    public chartColors: Array<any> = [
      {
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
        hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
        borderWidth: 2,
      }
    ];

    public chartOptions: any = {
      responsive: true
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }*/
  
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
