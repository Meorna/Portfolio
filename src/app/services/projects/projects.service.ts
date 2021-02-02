import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectI } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  /**
    * Déclaration du tableau de projets
    */
   listProjects: Array<ProjectI> = [];

   /**
    * Récupère les données du fichier json
    */
   getProjectsFromBack(){
     this.http.get<Array<ProjectI>>("/assets/data/projects.json").subscribe(
       data => {
         this.listProjects = data;
       },
       (error) => {
         console.log('Erreur ! : ' + error);
       }
     )
   }

   /**
    * Récupère les données
    * @param {HttpClient} http permet de faire des requêtes http
    */
   constructor(private http:HttpClient) {
     this.getProjectsFromBack();
   }
}

