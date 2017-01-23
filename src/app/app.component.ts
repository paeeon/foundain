import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NavController, MenuController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { MasterListPage } from '../pages/master-list/master-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  @ViewChild('content') nav: NavController;
  @ViewChild('menu') menuCtrl: MenuController;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  goToMasterList(): void {
    this.nav.push(MasterListPage)
      .then(() => this.menuCtrl.close());
  }

  goToSignIn(): void {
    this.nav.push(SignInPage)
      .then(() => this.menuCtrl.close());
  }
}
