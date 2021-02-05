import { Component, OnInit } from '@angular/core';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

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
   faBars = faBars;
   faChevronDown = faChevronDown;

   /**
     * Vide
     */
    constructor(public translate: TranslateService) {
      translate.addLangs(['fr', 'en']);
      translate.setDefaultLang('fr');
    }

    switchLang(lang: string) {
      this.translate.use(lang);
    }
 
   /**
     * Ouvre et ferme le menu déroulant quand on clique
     */
   toggleNavbar() {
     this.navbarOpen = !this.navbarOpen;
   }
   
   /**
     * Vide
     */
   ngOnInit(): void {
   }

}
