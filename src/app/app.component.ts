import { Component, OnInit } from '@angular/core';
/**
 * Displays the home page component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  /**
    * Dropdown menu closed.
    */
   navbarOpen = false;
   
   /**
    * Opens and closes the drop-down menu when clicked.
    */
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
