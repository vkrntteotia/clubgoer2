import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController,Events } from 'ionic-angular';
import { ProfileeditPage } from '../profileedit/profileedit';
import { EntercodePage } from '../entercode/entercode';
import { HistoricalrequestsPage } from '../historicalrequests/historicalrequests';
import {StatusBar} from '@ionic-native/status-bar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,public statusBar:StatusBar,public loadingCtrl:LoadingController, public events: Events ) {
       this.events.publish('role', 'clubgoer');
  }
  public Loading=this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
       this.Loading.dismiss();
       let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        });
       alert.present();
        setTimeout(()=>alert.dismiss(),1500);
      }
    }
editprofile(){
    this.navCtrl.push(ProfileeditPage);
}
entercodePage(){
  this.navCtrl.push(EntercodePage);
}
historicalrequestsPage(){
  this.navCtrl.push(HistoricalrequestsPage);
}
}
