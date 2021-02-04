import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseI } from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
    /**
    * Déclaration du tableau d'étudiant
    */
    listCourses: Array<CourseI> = [];

    /**
     * Récupère les données du fichier json
     */
    getCoursesFromBack(){
      this.http.get<Array<CourseI>>("/assets/courses.json").subscribe(
        data => {
          this.listCourses = data;
        },
        (error) => {
          console.log('Erreur Courses data! : ' + error);
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
