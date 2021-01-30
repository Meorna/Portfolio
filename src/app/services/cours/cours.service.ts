import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursI } from 'src/app/models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  /**
    * Déclaration du tableau d'étudiant
    */
   listCourses: Array<CoursI> = [];

   /**
     * Récupère les données du fichier json
     */
   getCoursesFromBack(){
     this.http.get<Array<CoursI>>("/assets/data/courses.json").subscribe(
       data => {
         console.log(data);
         this.listCourses = data;
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
     this.getCoursesFromBack();
    }
}
