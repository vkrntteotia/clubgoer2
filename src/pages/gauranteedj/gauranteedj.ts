import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

/**
 * Generated class for the GauranteedjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gauranteedj',
  templateUrl: 'gauranteedj.html',
})
export class GauranteedjPage {
  public playtopreq;eventid;eventname;
  public Loader=this.loadingCtrl.create({
    content: 'Please wait...'
  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
      this.eventid = navParams.get("eventid");
      this.eventname = navParams.get("eventname");
     //   alert(this.eventid);
     // alert(this.eventname);
      if(this.eventname==undefined){
            this.eventname = "Dj Admin Event";
      }
    this.playnowlist();
  }

  
  playnowlist(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Loader.present().then(() => {
      var data = {
        djid: Userid,
        eventid:this.eventid,
        reqopt:2
            }
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/gauranteedplay', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          console.log(data);
          if (data.isSucess == "true") {
            this.playtopreq=data.data;
            console.log(this.playtopreq);
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
          id:Userid,
          reqoption:2
        }
        var serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'events/topquereq', serialized, options)
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
              this.playtopreq=data.data;
              //this.navCtrl.push(EventsdjPage);
            } else {
              
            }
          })
      });
  }

  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
      this.Loader.dismiss();
       let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        });
       alert.present();
        setTimeout(()=>alert.dismiss(),1500);
      }
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
          id:Userid,
          reqoption:2
              }
        var serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'events/requesttopstatus', serialized, options)
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaynowlistdjPage');
  }

}
