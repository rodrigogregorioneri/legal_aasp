import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AvaliationPage } from '../pages/avaliation/avaliation';
import { ResultComponent } from '../pages/result/result-component';
import { LawyerListPage } from '../pages/lawyer-list/lawyerlist';
import { SlideComponent } from '../pages/slide/slide';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AvaliationPage,
    ResultComponent,
    LawyerListPage,
    SlideComponent,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AvaliationPage,
    ResultComponent,
    SlideComponent,
    LawyerListPage,
    HomePage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
