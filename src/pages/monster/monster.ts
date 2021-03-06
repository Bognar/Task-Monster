import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-monster',
  templateUrl: 'monster.html',
})
export class MonsterPage {
  fine = [];
  status:string ='';
  chosen= null;
  userId: string;
  adresa:string ="";
  avatar = [];
  name: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, private fire: AngularFireAuth) {
    this.fine = navParams.get("fine");
    this.fire.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;

      }
    });
  }

  ionViewDidLoad() {
    
  }
  @ViewChild('monstername') mname;
  mStatus(fine){
    if(fine<=10) {
     
    return this.status= "Youngling";
    
  } else if(fine<=50 && fine>10){
    
    return this.status= "Hunter";
    
  }else if(fine<=100 && fine>50){
    
    return this.status= "Predator";

  }else if(fine<=200 && fine>100){
    return this.status ="Lord";
  }else if(fine<=1000 && fine>200){
    return this.status = "King";
  }else {
    return this.status = "Emperor";
    
  }
  
}
pongo(adresa:string, chosen:boolean, name:string, mname:string, finished:number) {
  this.adresa = "sprite1.png"
  this.name = "Pongo";
  finished=0;
  
  this.db.object(`/avatars/${this.userId}/`).set({avatar:this.adresa, chosen :false, name:this.name, finished:finished, monstername:this.mname.value});
  
}
Fluffy(adresa:string, chosen:boolean, name:string, finished:number) {
  this.adresa = "sprite2.png"
  this.name = "Fluffy";
  finished=0;
  this.db.object(`/avatars/${this.userId}/`).set({avatar:this.adresa, chosen :false, name:this.name,finished:finished, monstername:this.mname.value});
  
}
Happy(adresa:string, chosen:boolean, name:string, finished:number) {
  this.adresa = "sprite3.png"
  this.name = "Happy";
  finished=0;
  this.db.object(`/avatars/${this.userId}/`).set({avatar:this.adresa, chosen :false, name:this.name,finished:finished, monstername:this.mname.value});
  
}
Lemono(adresa:string, chosen:boolean, name:string, finished:number) {
  this.adresa = "sprite4.png"
  this.name = "Lemono";
  finished=0;
  this.db.object(`/avatars/${this.userId}/`).set({avatar:this.adresa, chosen :false, name:this.name,finished:finished, monstername:this.mname.value});
  
}
Zooka(adresa:string, chosen:boolean, name:string, finished:number) {
  this.adresa = "sprite5.png"
  this.name = "Zooka";
  finished=0;
  this.db.object(`/avatars/${this.userId}/`).set({avatar:this.adresa, chosen :false, name:this.name,finished:finished, monstername:this.mname.value});
  
}

ngOnInit() {
  
  this.db.list(`/avatars/${this.userId}`).valueChanges().subscribe(d => {
    this.avatar = d;
    
    
    
  });
  
}
}
