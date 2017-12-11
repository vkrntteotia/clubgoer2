import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SignupdjPage } from '../signupdj/signupdj';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the SignindjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signindj',
  templateUrl: 'signindj.html',
})
export class SignindjPage {
  public vid;
  public video;
  public Loading=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });
  constructor(public navCtrl: NavController, public navParams: NavParams,public statusBar: StatusBar,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    console.log(this.navParams.get('back'));
    statusBar.hide();
    this.statusBar.overlaysWebView(true);
  }

playVideo(){
  //this.vid="http://priyank.crystalbiltech.com/dj/files/djjvideos.mp4";
  this.vid="assets/video/djjvideos.mp4";
       this.video = document.getElementById("video-bg");
       this.video.src = this.vid; 
       this.video.muted = true; 
       this.video.loop = true;
       this.video.play();    
}
signup_dj(){
  localStorage.setItem('role','dj');
  this.navCtrl.push(SignupdjPage);
  this.video.pause();
}
signup_clubgoer(){
    localStorage.setItem('role','clubgoer');
    this.navCtrl.push(SignupPage);
    this.video.pause();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignindjPage');
    this.playVideo();
  }
  ionViewDidEnter() {
    if (window.navigator.onLine == true) {
    } else {
      this.Loading.dismissAll();
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
