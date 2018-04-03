import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  primary_links: any;
  secondary_links: any;
  nav_link_container: any;

  constructor(
    public navCtrl: NavController
  ) {
  }

  ngOnInit(){
    this.primary_links = document.querySelectorAll('.primary-link');
    this.secondary_links = document.querySelectorAll('.secondary-link');
    this.nav_link_container = document.querySelectorAll('.nav-link-container');
  }

  toAbout() {
    this.navCtrl.push('AboutPage');
  }
  toHome() {
    this.navCtrl.push('HomePage');
  }
  toCompetition() {
    this.navCtrl.push('CompetitionPage');
  }
  toSwissGames() {
    this.navCtrl.push('SwissGamesPage');
  }


  openMenu() {
      for(let i=0; i < this.nav_link_container.length; i++) {
        this.nav_link_container[i].style.left = '0px';
      }

      for(let i=0; i < this.primary_links.length; i++) {
        this.primary_links[i].classList.add('primary-style');
      }

      for(let i=0; i < this.secondary_links.length; i++) {
        this.secondary_links[i].classList.add('secondary-style');
      }
  }

  animateCloseLink() {
      for(let i=0; i < this.nav_link_container.length; i++) {
        this.nav_link_container[i].style.left = '101vw';
      }

      for(let i=0; i < this.primary_links.length; i++) {
        this.primary_links[i].classList.remove('primary-style');
      }

      for(let i=0; i < this.secondary_links.length; i++) {
        this.secondary_links[i].classList.remove('secondary-style');
      }
  }

}
