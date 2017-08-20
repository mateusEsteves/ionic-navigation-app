import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  aboutPage = AboutPage;

  constructor(public navCtrl: NavController) {

  }

}
