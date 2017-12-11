import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController } from 'ionic-angular';
import { RequestsongplayPage } from '../requestsongplay/requestsongplay';
import { VoteupPage } from '../voteup/voteup';
import { ShoutoutPage } from '../shoutout/shoutout';

/**
 * Generated class for the SongrequestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-songrequests',
  templateUrl: 'songrequests.html',
})
export class SongrequestsPage {
  public djid;eventid;
  public Loading = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    this.djid = navParams.get("djid");
    this.eventid = navParams.get("eventid");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongrequestsPage');
  }

  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
      this.Loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        buttons:['ok']
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 2500);
    }
  }

  voteupPage(){
    this.navCtrl.push(VoteupPage, {
                eventid: this.eventid,
                djid:this.djid
              })
  }

  requestsongplayPage(){
    this.navCtrl.push(RequestsongplayPage, {
                eventid: this.eventid,
                djid:this.djid
              });
  }
  
  shoutoutPage(){
    this.navCtrl.push(ShoutoutPage, {
                eventid: this.eventid,
                djid:this.djid
              });
  }

}
