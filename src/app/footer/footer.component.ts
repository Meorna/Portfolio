import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faChevronUp = faChevronUp;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  isShow: boolean = false;
  topPosToStartShowing = 100;
  constructor() { }
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition, 'top', this.topPosToStartShowing);  
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  ngOnInit(): void {
  }

}
