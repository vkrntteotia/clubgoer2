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
  selector: 'page-shoutoutdj',
  templateUrl: 'shoutoutdj.html',
})
export class ShoutoutdjPage {
  public playnowreq;eventid;eventname;
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
      this.shoutoutreq();
  }

  shoutoutreq(){
    alert("hello");
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Loader.present().then(() => {
      var data = {
        djid: 3,
        eventid:this.eventid
            }
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/getshoutouts', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          alert(JSON.stringify(data));
          if (data.isSucess == "true") {
            this.playnowreq=data.data;
          } else {
            this.playnowreq=[];
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
        this.http.post(this.appsetting.myGlobalVar + 'events/Votetopquereq', serialized, options)
          .map(res => res.json())
          .subscribe(data => {
            Loader.dismiss();
            if (data.isSucess == "true") {
              let alertr = this.alertCtrl.create({
                  title: 'Requests',
                  subTitle: data.msg,
                });
                  alertr.present();
              setTimeout(()=>alertr.dismiss(),1500);
              this.playnowreq=data.data;
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
        this.http.post(this.appsetting.myGlobalVar + 'events/requeststatus', serialized, options)
          .map(res => res.json())
          .subscribe(data => {
            Loader.dismiss();
            console.log(data);
            if (data.isSucess == "true") {
              let alertr = this.alertCtrl.create({
                  title: 'Requests',
                  subTitle: data.msg,
                });
                  alertr.present();
              setTimeout(()=>alertr.dismiss(),1500);
              this.playnowreq=data.data;
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoutoutDjPage');
  }

}
