import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { ManageeventsdjPage } from '../manageeventsdj/manageeventsdj';
import { NameofeventsdjPage } from '../nameofeventsdj/nameofeventsdj';
/**
 * Generated class for the OmniaclubeventdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-omniaclubeventdj',
  templateUrl: 'omniaclubeventdj.html',
})
export class OmniaclubeventdjPage {
  public upevntid;
  public upevntdata;
  public Loader=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  buttonColor: string = '#b00101';
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    this.upevntid = navParams.get("evntid");
    this.upevent(this.upevntid);
  }

  upevent(eventidd){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Loader.present().then(() => {
      var data = {
        eventid: eventidd,
            }

      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/eventdetail', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          console.log(data);
      
          if (data.isSucess == "true") {
            console.log(data);
           

            this.upevntdata = data.data;
            if(data.data.Event.active==1){
              this.buttonColor="#328000";
            }
            console.log("upcoming event");
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
      this.Loader.dismiss();
       let alert = this.alertCtrl.create({
        title: 'Network connection',
        subTitle: 'Something went wrong check your internet connection',
        buttons:['ok']
        });
       alert.present();
        setTimeout(()=>alert.dismiss(),1500);
      }
    }
  deletevnt(eventid){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Loader.present().then(() => {
      var data = {
        eventid: eventid,
            }

      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/eventdelete', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          if (data.isSucess == "true") {
            let alert = this.alertCtrl.create({
              title: 'Manage event',
              subTitle: data.msg
            });
            alert.present();
            setTimeout(() => alert.dismiss(), 1500);
            this.navCtrl.push(ManageeventsdjPage);
          } else {
            let alert = this.alertCtrl.create({
              title: 'Manage event',
              subTitle: data.msg
            });
            alert.present();
            setTimeout(() => alert.dismiss(), 1500);
          }
        })
    });
  }

  startevent(eventid,eventname){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Loader.present().then(() => {
      var data = {
                eventid: eventid,
            }
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/eventstart', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          if (data.isSucess == "true") {
            this.buttonColor="#328000";
            let alert = this.alertCtrl.create({
              title: 'Manage event',
              subTitle: data.msg,
              buttons:['ok']
            });
            alert.present();
            setTimeout(() => alert.dismiss(), 2500);
            this.navCtrl.push(NameofeventsdjPage,{
              eventname:eventname
            });
          } else {
            let alert = this.alertCtrl.create({
              title: 'Manage event',
              subTitle: data.msg,
              buttons:['ok']
            });
            alert.present();
            setTimeout(() => alert.dismiss(), 2500);
          }
        })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OmniaclubeventdjPage');
  }

}
