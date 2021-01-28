import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /**
    * Menu déroulant fermé
    */
   navbarOpen = false;

   /**
     * Vide
     */
   constructor() { }
 
   /**
     * Ouvre et ferme le menu déroulant quand on clique
     */
   toggleNavbar() {
     console.log("click");
     this.navbarOpen = !this.navbarOpen;
   }
   
   /**
     * Vide
     */
   ngOnInit(): void {
   }

}
