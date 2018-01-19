import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { PaymenthistorydjPage } from '../paymenthistorydj/paymenthistorydj';
import { RequesthistorydjPage } from '../requesthistorydj/requesthistorydj';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

/**
 * Generated class for the PasteventdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pasteventdj',
  templateUrl: 'pasteventdj.html',
})
export class PasteventdjPage {
  public pastevntid;
  public pastevntdata;
  public playnow;
  public grntplay;
  public possibly;
  public Loader=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
      this.pastevntid = navParams.get("eventird");
      this.pastevent(this.pastevntid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasteventdjPage');
  }
  pastevent(eventidd) {
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
          if (data.isSucess == "true") {
            this.pastevntdata = data.data;
            this.playnow=data.data[0][0].TipOption.price;
            this.grntplay=data.data[0][1].TipOption.price;
            this.possibly=data.data[0][2].TipOption.price;
          } else {
            
          }
        })
    });
  }
  reqhs(eventid) {
    this.navCtrl.push(RequesthistorydjPage, {
      eventid : eventid
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
        setTimeout(()=>alert.dismiss(),2500);
      }
    }

  payhs(eventid) {
    this.navCtrl.push(PaymenthistorydjPage, {
      eventid : eventid
    });
  }
}
