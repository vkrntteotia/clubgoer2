import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { PayinfoPage } from '../payinfo/payinfo';
import { HomePage } from '../home/home';
/**
 * Generated class for the ShoutoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shoutout',
  templateUrl: 'shoutout.html',
})
export class ShoutoutPage {
public djid;eventid;data:any={};
  constructor(public navCtrl: NavController,
  public navParams: NavParams, 
  public http:Http,
  public appsetting: Appsetting,
  public loadingCtrl:LoadingController,
   private alertCtrl: AlertController) {
     this.djid = navParams.get("djid");
     this.eventid = navParams.get("eventid");
  }
public Loading=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
      return result.join("&");
  }
  shoutout(form){
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
    var User = JSON.parse(localStorage.getItem("USER_DATA"));
    var userid = User.id;
		var postdata = {
			userid: userid,
      djid:this.djid,
      eventid:this.eventid,
      name : form.value.name,
      type : form.value.shouttype,
      requestype:3,
      price: parseInt(form.value.tipamt)
		};

    if(form.value.tipamt=='')
    {
      let alert = this.alertCtrl.create({
                title: 'Shoutout',
                subTitle: 'Please fill the tip amount',
                buttons:['ok']
              });
                alert.present();
            setTimeout(()=>alert.dismiss(),3500);
    }else if(form.value.tipamt==0){

		var serialized = this.serializeObj(postdata);
    
	this.http.post(this.appsetting.myGlobalVar + 'users/shoutoutmake', serialized, options).map(res => res.json()).subscribe(data => {
			this.Loading.dismiss();
      if(data.isSucess == "true"){
        
             let alert = this.alertCtrl.create({
                title: 'Shoutout',
                subTitle: data.msg,
                buttons:['ok']
              });
                alert.present();
            setTimeout(()=>alert.dismiss(),3500);
            this.navCtrl.push(HomePage);
      }else{
            let alert = this.alertCtrl.create({
                title: 'Shoutout',
                subTitle: data.msg,
                buttons:['ok']
              });
                alert.present();
            setTimeout(()=>alert.dismiss(),3500);
      }
		})
    }
    else
     if(form.value.tipamt<2 || form.value.tipamt==''){
                let alert = this.alertCtrl.create({
                  title: 'Shoutout',
                  subTitle: 'Tip amount should be greater than 1',
                  buttons:['ok']
                });
                  alert.present();
              setTimeout(()=>alert.dismiss(),3500);
          }
    else{
      this.navCtrl.push(PayinfoPage, {
                postdata: postdata
              })
    }
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

}
