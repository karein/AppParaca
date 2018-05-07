import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from "angularfire2/auth";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { RegistrarPageModule } from '../pages/registrar/registrar.module';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { AngularFireDatabase } from 'angularfire2/database';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBmECqbQJFixgYOI0yKs1TRvOUwlUwqtAQ",
    authDomain: "apppraca-5b2ae.firebaseapp.com",
    databaseURL: "https://apppraca-5b2ae.firebaseio.com",
    projectId: "apppraca-5b2ae",
    storageBucket: "apppraca-5b2ae.appspot.com",
    messagingSenderId: "913201311081"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
  //RegistrarPage,com esse regis. aparecia o erro "Component is part of the declaration of 2 modules"


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    RegistrarPageModule,
    AngularFireAuthModule, 
    AngularFireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireModule,
    UserServiceProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
