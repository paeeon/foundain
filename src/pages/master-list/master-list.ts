import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../models/planet';

import { NavController, MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'master-list.html'
})
export class MasterListPage implements OnInit {
  planets: Planet[];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private PlanetService: PlanetService
  ) {}

  ngOnInit() {
    this.getPlanets();
  }

  openMenu(): void {
    console.log("open sesame!");
    this.menuCtrl.open();
  }

  getPlanets(): void {
    this.PlanetService.getPlanets()
      .then((planets) => this.planets = planets);
  }
}
