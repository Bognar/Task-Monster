import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HallPage } from '../hall/hall';
import { InfoPage } from '../info/info';
import { MonsterPage } from '../monster/monster';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',

})

export class AboutPage {
  todo: AngularFireList<any>;
  unData = [];
  userId: string;
  desc = '';
  myDate = [];
  key: string;
  color = '#';
  letters = ['947CB0', '96281B', '013243', '67809F', '4B77BE', '4DAF7C', 'EC644B', '013243'];
  fine = [];
  status: string = '';
  public tap: number = 0;
  tapit:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private fire: AngularFireAuth) {
    this.fire.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;

      }
    });
  }
  postDatatoDB(): void {
    this.color += this.letters[Math.floor(Math.random() * this.letters.length)];
    this.db.list("/tasks/" + this.userId + "/").push({ myDate: `${this.myDate}`, desc: `${this.desc}`, colordb: `${this.color}` });
    this.desc = '';
    this.myDate = null;
    this.color = '#';
  }

  mStatus(fine) {
    if (fine <= 10) {
      return this.status = "Youngling";

    } else if (fine <= 50 && fine > 10) {
      return this.status = "Hunter";

    } else if (fine <= 100 && fine > 50) {
      return this.status = "Predator";

    } else if (fine <= 200 && fine > 100) {
      return this.status = "Lord";
    } else if (fine <= 1000 && fine > 200) {
      return this.status = "King";
    } else {
      return this.status = "Emperor";
    }
  }
  monster(fine) {
    this.tapit = false;
    this.tap = 0;
    this.navCtrl.push(MonsterPage, { fine: this.fine });
  }
  hall(fine) {
    this.navCtrl.push(HallPage);
  }
  info(fine) {
    this.navCtrl.push(InfoPage);
  }
  logout() {
    this.navCtrl.setRoot(HomePage, this.fine);
    this.fire.auth.signOut();
  }
  tapEvent(e) {
    this.tap++;
    this.tapit = true;
  }
  delete(key: string) {
    this.db.list("/tasks/" + this.userId + "/").remove(key);

    this.db.object(`/counters/${this.userId}/finished`).query.ref.transaction((finished => {
      if (finished === null) {
        return finished = 1;
      } else {
        return finished + 1;
      }

    }));
    this.db.object(`/avatars/${this.userId}/finished`).query.ref.transaction((finished => {
      if (finished === null) {
        return finished = 1;
      } else {
        return finished + 1;
      }

    }));
  }
  ngOnInit(userId: string) {

    this.db.list<any>(`/tasks/${this.userId}`).snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    }).subscribe(data => {
      this.unData = data;

    });
    this.db.list(`/counters/${this.userId}`).valueChanges().subscribe(d => {
      this.fine = d;

    });

  }

}



