import { NgModule, ErrorHandler } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SignInPage } from '../pages/sign-in/sign-in';
import { TabsPage } from '../pages/tabs/tabs';
import { MasterListPage } from '../pages/master-list/master-list';
import { DetailPage } from '../pages/detail/detail';
import { FoundationService } from '../services/foundation.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    SignInPage,
    TabsPage,
    MasterListPage,
    DetailPage,
  ],
  imports: [
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    MaterialModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    SignInPage,
    TabsPage,
    MasterListPage,
    DetailPage,
  ],
  providers: [
    FoundationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
