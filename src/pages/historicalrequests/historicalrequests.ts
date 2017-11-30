import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams,App,AlertController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
/**
 * Generated class for the HistoricalrequestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historicalrequests',
  templateUrl: 'historicalrequests.html',
})
export class HistoricalrequestsPage {
  public requests:any;
 public Loading = this.loadingCtrl.create({
    content: 'Please wait...'
  })
  constructor(public navCtrl: NavController,
  public navParams: NavParams, 
  public http:Http,
  public app: App,
  public appsetting: Appsetting,
  public loadingCtrl:LoadingController,
   private alertCtrl: AlertController) {
     this.historicalrequest();
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

    doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.historicalrequest();
    console.log('refreshed')
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  historicalrequest() {
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
		var postdata = {
			userid: user_id
		};
    this.Loading.present();
		console.log(postdata);
		var serialized = this.serializeObj(postdata);

		this.http.post(this.appsetting.myGlobalVar + 'users/requestbyid', serialized, options).map(res => res.json()).subscribe(data => {
			this.Loading.dismiss();
      this.requests=data;
    })
  }
  
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
      return result.join("&");
  }

}
