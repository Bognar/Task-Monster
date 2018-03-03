import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styles: ['.sredina{text-align:center;}']
})
export class RegisterPage {

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  }
  @ViewChild('username') uname;
  @ViewChild('password') pass;
  ionViewDidLoad() {
    
  }

  presentToast(message: string) {
    this.toastCtrl.create ({
      message: message,
      duration: 3000

    }).present();

  }
sendregister() {
  this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.pass.value)
    .then (data =>{
          
          this.presentToast('Success! You\'re registered and logged in.');
          this.navCtrl.setRoot(AboutPage);

    }).catch (error => {
        
        this.presentToast(error.message);

    });
}
}
