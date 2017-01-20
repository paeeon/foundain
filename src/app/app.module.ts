import { NgModule, ErrorHandler } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SignInPage } from '../pages/sign-in/sign-in';
import { TabsPage } from '../pages/tabs/tabs';
import { MasterListPage } from '../pages/master-list/master-list';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    SignInPage,
    TabsPage,
    MasterListPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MaterialModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    SignInPage,
    TabsPage,
    MasterListPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
