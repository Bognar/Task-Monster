import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  }
  
  @ViewChild('username') uname;

  presentToast(message: string) {
    this.toastCtrl.create ({
      message: message,
      duration: 3000

    }).present();
  }
  

sendreset() {
  this.fire.auth.sendPasswordResetEmail(this.uname.value).then(data => {
    this.presentToast('Check your e-mail!');
      this.navCtrl.setRoot(HomePage);
  }).catch(error => {
    console.log ('got error', error);
    this.presentToast(error.message);
  });
  
}
}
