import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


@NgModule({
  declarations: [
    MyApp,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

  apiKey: "xxxxxxxxxx";
  authDomain: "your-domain-name.firebaseapp.com";
  databaseURL: "https://your-domain-name.firebaseio.com";
  storageBucket: "your-domain-name.appspot.com";
  messagingSenderId: '<your-messaging-sender-id>';
}

