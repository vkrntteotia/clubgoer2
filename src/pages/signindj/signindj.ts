import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public statusBar: StatusBar) {
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
  
}
