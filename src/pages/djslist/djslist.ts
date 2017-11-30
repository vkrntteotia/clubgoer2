import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams,App,AlertController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import {DjsdetailsPage} from '../djsdetails/djsdetails';

/**
 * Generated class for the DjslistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-djslist',
  templateUrl: 'djslist.html',
})
export class DjslistPage {
  public djs:any;
  constructor(public navCtrl: NavController,
  public navParams: NavParams, 
  public http:Http,
  public app: App,
  public appsetting: Appsetting,
  public loadingCtrl:LoadingController,
   private alertCtrl: AlertController) {
     this.showdjslist();
  }
public Loading=this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.showdjslist();
    console.log('refreshed')
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

   showdjslist() {
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
		var postdata = {
			userid: user_id
		};
    this.Loading.present();
		var serialized = this.serializeObj(postdata);
		this.http.post(this.appsetting.myGlobalVar + 'users/showalldjs', serialized, options).map(res => res.json()).subscribe(data => {
			this.Loading.dismiss();
      if(data.isSucess == "true"){
      this.djs=data.data;
    }else{
              let alert = this.alertCtrl.create({
                title: 'Dj List',
                subTitle: data.msg,
              });
                alert.present();
              setTimeout(()=>alert.dismiss(),1500);
    }
		})
  }
  
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
      return result.join("&");
  }

  djdetailsPage(djid){
    this.navCtrl.push(DjsdetailsPage, {
      djid: djid
    })
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

}
