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
    content: 'Please wait...'
  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
            ) {
              this.manageevent();
              this.segments = "team";
            
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageeventsdjPage');
  }

  manageevent() {
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
            }

      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/manageevent', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          if (data.status == true) {
            this.pastevnt = data.pastevent;
            this.upevnt = data.upevent;
            console.log(data);
            console.log("vikkki");
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
      eventid : eventid
    });
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
        setTimeout(()=>alert.dismiss(),1500);
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
