import { Component } from '@angular/core';
import { MasterListPage } from '../master-list/master-list'

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  signIn(): void {
    this.navCtrl.push(MasterListPage);
  }

}
