import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

/**
 * Generated class for the TopqueuedjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topqueuedj',
  templateUrl: 'topqueuedj.html',
})
export class TopqueuedjPage {
public playtopreq;eventid;eventname;
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
      this.eventid = navParams.get("eventid");
      this.eventname = navParams.get("eventname");
      if(this.eventname==undefined){
          this.eventname = "Dj Admin Event";
      }
      
  }

  ionViewCanEnter(){
    this.playnowlist();
  }

  playnowlist(){
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
        eventid:this.eventid
            }
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/alltopqueuelist', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          console.log(data);
          if (data.isSucess == "true") {
            this.playtopreq=data.data;
          } else {
            
          }
        })
    });
  }
  
  playimg(id,idd){
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      var options = new RequestOptions({ headers: headers });
      var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
      let Loader = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      Loader.present().then(() => {
        var data = {
          reqid: id,
          eventid:idd,
          id:Userid
        }
        var serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'events/topquereqdj', serialized, options)
          .map(res => res.json())
          .subscribe(data => {
            Loader.dismiss();
            console.log(data);
            if (data.isSucess == "true") {
              let alertr = this.alertCtrl.create({
                  title: 'Requests',
                  subTitle: data.msg,
                  buttons:['ok']
                });
                  alertr.present();
              setTimeout(()=>alertr.dismiss(),3500);
              this.playtopreq=data.data;
              //this.navCtrl.push(EventsdjPage);
            } else {
              
            }
          })
      });
  }

  cross(id,idd){
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      var options = new RequestOptions({ headers: headers });
      var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
      let Loader = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      Loader.present().then(() => {
        var data = {
          reqid: id,
          eventid:idd,
          id:Userid
              }
        var serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'events/toprequeststatus', serialized, options)
          .map(res => res.json())
          .subscribe(data => {
            Loader.dismiss();
            console.log(data);
            if (data.isSucess == "true") {
              let alertr = this.alertCtrl.create({
                  title: 'Requests',
                  subTitle: data.msg,
                  buttons:['ok']
                });
                  alertr.present();
              setTimeout(()=>alertr.dismiss(),3500);
              this.playtopreq=data.data;
              //this.navCtrl.push(EventsdjPage);
            } else {
              
            }
          })
      });
  }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaynowlistdjPage');
  }

}
