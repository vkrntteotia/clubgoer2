import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,ToastController,AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {LoadingController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { ProfileeditPage } from '../profileedit/profileedit';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
profile;srcImage;vid;video;audurl;audio;
 public Loading = this.loadingCtrl.create({
    content: 'Please wait...'
  })
  constructor(public navCtrl: NavController,
  public navParams: NavParams, 
  public http:Http,
  public app: App,
  public appsetting: Appsetting,
  public loadingCtrl:LoadingController,
  public toastCtrl:ToastController,
   private alertCtrl: AlertController) {
  this.profilePage()
   //this.vid="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4";
}
playAudio(){
  if(this.audurl!=""){
      this.audio = new Audio(this.audurl);
      this.audio.play();  
      this.video.pause();
  }else{
      this.video.pause();
      let alert = this.alertCtrl.create({
        title: 'Play Audio',
        subTitle: 'Please enter audio link in edit profile',
        });
      alert.present();
      setTimeout(()=>alert.dismiss(),1500);
  }
}
playVideo(){
  console.log(this.vid);
  if(this.vid!=""){
      this.video = document.getElementById("myVideo");
      this.video.src = this.vid; 
      this.video.play();
    //this.vid = 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4';
      this.audio.pause();
  }else{
    this.audio.pause();
    let alert = this.alertCtrl.create({
        title: 'Play Video',
        subTitle: 'Please enter video link in edit profile',
        });
      alert.present();
      setTimeout(()=>alert.dismiss(),1500);
  }
}

	profilePage() {
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
		var postdata = {
			userid: user_id
		};
    // this.audio.stop();  
    this.Loading.present();
		var serialized = this.serializeObj(postdata);

		this.http.post(this.appsetting.myGlobalVar + 'users/getuserbyid', serialized, options).map(res => res.json()).subscribe(data => {
			this.Loading.dismiss();
      // alert("back");
			this.appsetting.profile = data.data.User;
      this.vid = data.data.User.videourl;
      this.audurl = data.data.User.audiourl;
			// this.srcImage = this.profile.image;
			// console.log(this.profile);
		})
	}

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this. profilePage();
    console.log('refreshed')
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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
 
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  profileeditPage(){
    this.navCtrl.push(ProfileeditPage);
  }

  // payinfo(){
  //   this.navCtrl.push(PaymentinfoPage);
  // }
}

