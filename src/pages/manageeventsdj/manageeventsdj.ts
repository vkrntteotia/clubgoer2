import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { PasteventdjPage } from '../pasteventdj/pasteventdj';
import { OmniaclubeventdjPage } from '../omniaclubeventdj/omniaclubeventdj';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { EditeventPage } from '../editevent/editevent';
/**
 * Generated class for the ManageeventsdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manageeventsdj',
  templateUrl: 'manageeventsdj.html',
})
export class ManageeventsdjPage {
  public pastevnt:any;
  public upevnt:any;
  public segments:any;
  public Loading=this.loadingCtrl.create({
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
              
              this.segments = "team";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageeventsdjPage');
  }

  manageevent() {
    var d = new Date();
    var mm = ("0" + (d.getMonth() + 1)).slice(-2);
    var day = ("0" + (d.getDate())).slice(-2);
    var date = d.getFullYear()+"-"+mm+"-"+day;
    var minutes = d.getMinutes();
    var hour = d.getHours();
    var datime = d.getFullYear()+"-"+mm+"-"+day+" "+hour+":"+minutes+":00";
    var tmnow = hour+":"+minutes+":00";

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Loader.present().then(() => {
      var data = {
        userid: Userid,
        date: date,
        dattim:datime,
        tmnow:tmnow
            }

      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/manageevent', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          if (data.status == true) {
            this.pastevnt = data.pastevent;
            this.upevnt = data.upevent;
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

  pastevent(eventid) {
    this.navCtrl.push(PasteventdjPage, {
      eventird : eventid
    });
  }
  
  ionViewCanEnter(){
    this.manageevent();
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
        setTimeout(()=>alert.dismiss(),2500);
      }
    }

  editEvent(eventid) {
    this.navCtrl.push(EditeventPage, {
      evntiid: eventid
    });
  }

  omniaclubevent(eventid,eventname) {
   localStorage.setItem('name',eventname);
    
    this.navCtrl.push(OmniaclubeventdjPage, {
      evntid : eventid
    });
  }
}
