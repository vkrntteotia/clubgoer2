import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
//import { EventsdjPage } from '../eventsdj/eventsdj';
/**
 * Generated class for the PlaynowlistdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificationdj',
  templateUrl: 'notificationdj.html',
})
export class NotificationdjPage {
  public playnowreq;eventid;eventname;shoutreq;
  public Loader = this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
      this.notifreq();
  }

  notifreq(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    Loader.present().then(() => {
      var data = {
        djid: Userid,
            }
            console.log(data);
            console.log("vikki");
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/getnotifications', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          if (data.isSucess == "true") {
            this.shoutreq=data.data;
          } else {
            this.shoutreq=[];
          }
        })
    });
  }

  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
      this.Loader.dismissAll();
       let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        buttons:['ok']
        });
       alert.present();
        setTimeout(()=>alert.dismiss(),2500);
      }
    }
  // playimg(id,idd){
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  //     var options = new RequestOptions({ headers: headers });
  //     var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
  //     let Loader = this.loadingCtrl.create({
  //       content: 'Please wait...'
  //     });
  //     Loader.present().then(() => {
  //       var data = {
  //         reqid: id,
  //         eventid:idd,
  //         id:Userid,
  //         reqoption:3
  //       }
  //       var serialized = this.serializeObj(data);
  //       this.http.post(this.appsetting.myGlobalVar + 'events/votetopquereq', serialized, options)
  //         .map(res => res.json())
  //         .subscribe(data => {
  //           Loader.dismiss();
  //           if (data.isSucess == "true") {
  //             let alertr = this.alertCtrl.create({
  //                 title: 'Requests',
  //                 subTitle: data.msg,
  //               });
  //                 alertr.present();
  //             setTimeout(()=>alertr.dismiss(),1500);
  //             this.shoutreq=data.data;
  //             //this.navCtrl.push(EventsdjPage);
  //           } else {
              
  //           }
  //         })
  //     });
  // }

  // cross(id,idd){
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  //     var options = new RequestOptions({ headers: headers });
  //     var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
  //     let Loader = this.loadingCtrl.create({
  //       content: 'Please wait...'
  //     });
  //     Loader.present().then(() => {
  //       var data = {
  //         reqid: id,
  //         eventid:idd,
  //         id:Userid,
  //         reqopt:3
  //             }
  //       var serialized = this.serializeObj(data);
  //       this.http.post(this.appsetting.myGlobalVar + 'events/shoutrequeststatus', serialized, options)
  //         .map(res => res.json())
  //         .subscribe(data => {
  //           Loader.dismiss();
  //           console.log(data);
  //           if (data.isSucess == "true") {
  //             let alertr = this.alertCtrl.create({
  //                 title: 'Requests',
  //                 subTitle: data.msg,
  //               });
  //                 alertr.present();
  //             setTimeout(()=>alertr.dismiss(),1500);
  //             this.shoutreq=data.data;
  //             //this.navCtrl.push(EventsdjPage);
  //           } else {
              
  //           }
  //         })
  //     });
  // }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoutoutDjPage');
  }

}
