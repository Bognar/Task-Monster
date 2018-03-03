import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';





@Component({
  selector: 'page-hall',
  templateUrl: 'hall.html',
})
export class HallPage {
  avatarhall = <any>[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private fire: AngularFireAuth) {

  }

  ionViewDidLoad() {

    this.db.list(`/avatars/`).valueChanges().subscribe(d => {
      
      this.avatarhall = d.sort((a,b) => (a as any).finished - (b as any).finished).reverse();
           
    });
    

  }


}
