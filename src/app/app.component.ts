import { Component, OnInit } from '@angular/core';
/**
 * Displays the home page component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  /**
    * Menu déroulant fermé
    */
   navbarOpen = false;
   
   /**
    * Ouvre et ferme le menu déroulant quand on clique
    */
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
