import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ResetPage } from '../reset/reset';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
 


  constructor(public navCtrl: NavController, ) {

  }
  prijava() {
        this.navCtrl.push(LoginPage);
      }
  registracija() {
    this.navCtrl.push(RegisterPage);

  }
  resetpwd() {
    this.navCtrl.push(ResetPage);
  }
}
