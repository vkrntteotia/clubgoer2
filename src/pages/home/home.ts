import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController,Events } from 'ionic-angular';
import { ProfileeditPage } from '../profileedit/profileedit';
import { EntercodePage } from '../entercode/entercode';
import { HistoricalrequestsPage } from '../historicalrequests/historicalrequests';
import {StatusBar} from '@ionic-native/status-bar';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              private alertCtrl: AlertController,
              public statusBar:StatusBar,
              public loadingCtrl:LoadingController, 
              public events: Events,
              public http: Http,
              public appsetting: Appsetting ) {
       this.events.publish('role', 'clubgoer');
  }
  public Loading=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });

    ionViewDidEnter() {
      if (window.navigator.onLine == true) {
          this.getuser();
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

    serializeObj(obj) {
      var result = [];
      for (var property in obj)
        result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
  
      return result.join("&");
    }

    getuser() {
      this.Loading.present();
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      let options = new RequestOptions({ headers: headers });
      var data = {
        userid: JSON.parse(localStorage.getItem('USER_DATA')).id
      }
      var Serialized = this.serializeObj(data);
      this.http.post(this.appsetting.myGlobalVar + 'users/getuserbyid', Serialized, options).map(res => res.json()).subscribe(response => {
        this.Loading.dismiss();
        if (response.isSucess == "true") {
          localStorage.setItem("USER_DATA", JSON.stringify(response.data.User));
          this.events.publish('role', 'clubgoer'); 
        }
      })
    }

    editprofile(){
        this.navCtrl.push(ProfileeditPage);
    }

    entercodePage(){
      this.navCtrl.push(EntercodePage);
    }

    historicalrequestsPage(){
      this.navCtrl.push(HistoricalrequestsPage);
    }

}
