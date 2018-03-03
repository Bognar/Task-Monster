import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  }

  presentToast(message: string) {
    this.toastCtrl.create ({
      message: message,
      duration: 3000

    }).present();
  }
  @ViewChild('username') uname;
  @ViewChild('password') pass;
 
  sendlogin() {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.pass.value)
    .then (data =>{
      this.presentToast('Success! You\'re logged in');
      this.navCtrl.setRoot(AboutPage);

    }).catch (error => {
      console.log ('got error', error);
      this.presentToast(error.message);

    });
  }
}
