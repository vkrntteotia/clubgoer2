import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
/**
 * Generated class for the RequesthistorydjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requesthistorydj',
  templateUrl: 'requesthistorydj.html',
})
export class RequesthistorydjPage {
  public pastevntid;
  public reqhistdata;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController) {
    this.pastevntid = navParams.get("eventid");
    this.getreqhistory(this.pastevntid);
  }

  getreqhistory(pastevntid){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    let Loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Loader.present().then(() => {
      var data = {
        eventid: pastevntid,
        djid: Userid,
        requestype: 1,
            }
      var serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'events/requesthist', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          Loader.dismiss();
          if (data.isSucess == "true") {
            this.reqhistdata = data.data;
            console.log(data);
            console.log("pastevent");
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
    console.log('ionViewDidLoad RequesthistorydjPage');
  }

}
