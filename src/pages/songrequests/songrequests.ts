import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.djid = navParams.get("djid");
    this.eventid = navParams.get("eventid");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongrequestsPage');
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
