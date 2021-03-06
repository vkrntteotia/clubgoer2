import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { PlaynowlistdjPage } from '../playnowlistdj/playnowlistdj';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { TopqueuedjPage } from '../topqueuedj/topqueuedj';
import { GauranteedjPage } from '../gauranteedj/gauranteedj';
import { PossiblydjPage } from '../possiblydj/possiblydj';
//import { VoteupdjPage } from '../voteupdj/voteupdj';
import { ShoutoutdjPage } from '../shoutoutdj/shoutoutdj';
import { VotingPage } from '../voting/voting';
/**
 * Generated class for the NameofeventsdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nameofeventsdj',
  templateUrl: 'nameofeventsdj.html',
})
export class NameofeventsdjPage {
  setbit: boolean = false;
  public playnow;
  public gauranteedplay;
  public possiblyplay;
  public topqueue; voteup; eventidd; eventname; shoutoutdj;
  public Loading = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    // this.eventname = navParams.get("eventname");
    // if (this.eventname == undefined) {
    //   this.eventname = "Dj's Event";
      
    // } else {
    //   this.playnow = 0;
    //   this.gauranteedplay = 0;
    //   this.possiblyplay = 0;
    //   this.topqueue = 0;
    //   this.voteup = 0;
    //   this.eventidd = 0;
    //   this.shoutoutdj = 0;
    // } 
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.requestinfo();
    console.log('refreshed')
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  requestinfo() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    // let Loader = this.loadingCtrl.create({
    //   content: 'Please wait...'
    // });
    var d = new Date();
    var mm = ("0" + (d.getMonth() + 1)).slice(-2);
    var day = ("0" + (d.getDate())).slice(-2);
    var date = d.getFullYear()+"-"+mm+"-"+day;
    var minutes = d.getMinutes();
    var hour = d.getHours();
    var datime = d.getFullYear()+"-"+mm+"-"+day+" "+hour+":"+minutes+":00";
    var tmnow = hour+":"+minutes+":00";
    //Loader.present().then(() => {
      var data = {
        djid: Userid,
        date: date,
        dattim:datime,
        tmnow:tmnow
      }
      console.log(data);
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/requestcount', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
         // Loader.dismiss();
          console.log(data);
          if (data.isSucess == "true") {
            this.playnow = data.playnow;
            this.gauranteedplay = data.gauranteedplay;
            this.possiblyplay = data.possiblyplay;
            this.topqueue = data.topqueue;
            this.voteup = data.voteup;
            this.eventidd = data.eventid;
            this.shoutoutdj = data.shoutout;
            this.eventname = data.eventname;
            if(data.msg=="vikki"){
              if(data.msgg=='' || data.msgg==undefined || data.msgg=="undefined"){
                data.msgg = "No events available";
              }
              let alert = this.alertCtrl.create({
                subTitle: data.msgg,
                buttons:['ok']
              });
              if(this.setbit ==false){
                alert.present();
              }
              setTimeout(()=>{
                alert.dismiss();
                this.setbit = true;
              },2500);
            }
          } else {

          }
       // })
    });
  }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NameofeventsdjPage');
    
  }

  topque(eventid) {
    if (this.eventname == undefined) {
      this.navCtrl.push(TopqueuedjPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    } else {
      this.navCtrl.push(TopqueuedjPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    }
  }

  play(eventid) {
    if (this.eventname == undefined) {
      this.navCtrl.push(PlaynowlistdjPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    } else {
      this.navCtrl.push(PlaynowlistdjPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    }
  }

  grntply(eventid) {
    if (this.eventname == undefined) {
      this.navCtrl.push(GauranteedjPage, {
        eventid: eventid,
        eventname: this.eventname,

      });
    } else {
      this.navCtrl.push(GauranteedjPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    }
  }

  possply(eventid) {
    if (this.eventname == undefined) {
      this.navCtrl.push(PossiblydjPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    } else {
      this.navCtrl.push(PossiblydjPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    }
  }

  voteupnow(eventid) {
    if (this.eventname == undefined) {
      this.navCtrl.push(VotingPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    } else {
      this.navCtrl.push(VotingPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    }
  }


  shoutout(eventid) {
    if (this.eventname == undefined) {
      this.navCtrl.push(ShoutoutdjPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    } else {
      this.navCtrl.push(ShoutoutdjPage, {
        eventid: eventid,
        eventname: this.eventname
      });
    }
  }


  ionViewCanEnter(){
    console.log('can enter');
    this.requestinfo();
    /********** Code to refresh page after 1 second **************/
        this.appsetting.interval = setInterval(() => {
          this.requestinfo();
        }, 5000);
   /***** end **********/
  }

  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
      this.Loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 1500);
    }
  }

}
