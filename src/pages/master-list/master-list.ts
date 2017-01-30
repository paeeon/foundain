import { Component } from '@angular/core';
import { FoundationService } from '../../services/foundation.service';
import { DetailPage } from '../detail/detail';
import { Foundation } from '../../models/Foundation';

import { NavController, MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'master-list.html'
})
export class MasterListPage {
  foundations: Foundation[];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private FoundationService: FoundationService
  ) {}

  ionViewDidLoad() {
    this.getFoundations();
  }

  openMenu(): void {
    console.log("open sesame!");
    this.menuCtrl.open();
  }

  goToFoundation(foundation): void {
    this.navCtrl.push(DetailPage, {
      id: foundation._id
    });
  }

  getFoundations(): void {
    this.FoundationService.getFoundations()
      .then(foundations => {
        this.foundations = foundations;
      });
  }
}
