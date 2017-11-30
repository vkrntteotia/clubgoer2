import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
/**
 * Generated class for the TransactionhstrydjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-transactionhstrydj',
  templateUrl: 'transactionhstrydj.html',
})
export class TransactionhstrydjPage {
  public transachistdata;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,) {
      this.paidinfo();
  }

  paidinfo(){
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
            }
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/getpaymantdata', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          console.log(data);
          console.log("Transaction history");
          if (data.isSucess == "true") {
            this.transachistdata=data.data;
          } else {
            this.transachistdata="";
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
    console.log('ionViewDidLoad TransactionhstrydjPage');
  }

}
