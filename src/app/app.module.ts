import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MonsterPage } from '../pages/monster/monster';
import { HallPage } from '../pages/hall/hall';
import { InfoPage } from '../pages/info/info';
import { ResetPage } from '../pages/reset/reset';

const firebaseAuth = {
  apiKey: "AIzaSyAvF3OOIEsNc893LB6cYLjupvVgX4Kh3Wk",
  authDomain: "loginproject-4cc14.firebaseapp.com",
  databaseURL: "https://loginproject-4cc14.firebaseio.com",
  projectId: "loginproject-4cc14",
  storageBucket: "loginproject-4cc14.appspot.com",
  messagingSenderId: "606759021030"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    RegisterPage,
    LoginPage,
    MonsterPage,
    HallPage,
    InfoPage,
    ResetPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseAuth),
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    RegisterPage,
    LoginPage,
    MonsterPage,
    HallPage,
    InfoPage,
    ResetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
