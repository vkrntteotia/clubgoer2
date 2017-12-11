import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

/**
 * Generated class for the HelpdjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helpdj',
  templateUrl: 'helpdj.html',
})
export class HelpdjPage {
   public help;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    public toastCtrl:ToastController,
    private alertCtrl: AlertController) {
      this.gethelp();
  }

  public Loader = this.loadingCtrl.create({
		content: 'Please wait...',
    dismissOnPageChange: true
  });
  
    gethelp(){
    this.Loader.present();
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers }); 
		var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
    var postdata = {
      userid:user_id,
      position:"help"
    };
console.log(postdata);
    var serialized = this.serializeObj(postdata);
    this.http.post(this.appsetting.myGlobalVar + 'users/gethelpdj', serialized, options).map(res => res.json()).subscribe(response => {
      this.Loader.dismiss();
      if(response.isSucess=="true"){
           this.help=response.data.Staticpage;
           console.log(response.data.Staticpage);
        } else{
          this.help=[];
        }
      })
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
        subTitle: 'Something went wrong check your internet connection'
        });
       alert.present();
       setTimeout(()=>alert.dismiss(),1500);
      }
  }

}
