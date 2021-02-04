import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '../services/projects/projects.service';
import { ChartsModule} from 'angular-bootstrap-md';

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

    public chartType: string = 'doughnut';

    public chartDatasets: Array<any> = [];

    public chartLabels: Array<any> = [];

    public chartColors: Array<any> = [
      {
        backgroundColor: ['#17a2b8', '#0ECFB4', '#0EC477', '#0E4CC4', '#0E82CF'],
        hoverBackgroundColor: ['#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50', '#2c3e50'],
        borderWidth: 2,
      }
    ];

    public chartOptions: any = {
      responsive: true,
      legend: {
        label: {
          fontSize: '1.5rem'
        }
      }
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }

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
            this.chartDatasets = [
              { data: this.servProjects.listProjects[this.indexProject].percent, label: 'My First dataset' }
            ];
            this.chartLabels = this.servProjects.listProjects[this.indexProject].language;
            console.log(this.indexProject);
            console.log("test" + this.servProjects.listProjects[this.indexProject].name);
          }
        }
      )
      
    }

}
