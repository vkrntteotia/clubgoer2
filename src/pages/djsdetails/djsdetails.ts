import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the DjsdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-djsdetails',
  templateUrl: 'djsdetails.html',
})

export class DjsdetailsPage {
  public djid; djs; videoUrl;utube;
  constructor(public navCtrl: NavController,
  public navParams: NavParams, 
  public http:Http,
  public app: App,
  public appsetting: Appsetting,
  public loadingCtrl:LoadingController,
    private alertCtrl: AlertController, private sanitizer: DomSanitizer) {
    this.djid = navParams.get("djid");
    this.showdjsdetail(this.djid);
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

  showdjsdetail(djid) {
    this.Loading.present();
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		var postdata = {
			userid: djid
		};
		var serialized = this.serializeObj(postdata);
		this.http.post(this.appsetting.myGlobalVar + 'users/djdetails', serialized, options).map(res => res.json()).subscribe(data => {
          
      this.Loading.dismiss();
       if(data.isSucess == "true"){
      this.djs=data.data;
      console.log(this.djs);
         if (data.data.User.audiourl == null || data.data.User.audiourl == undefined || data.data.User.audiourl == "") {
          this.videoUrl="";
          }
          else{
           this.utube = data.data.User.audiourl.replace("watch?v=", "embed/");
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.utube);
           
          }
      

    }else{
            let alert = this.alertCtrl.create({
                title: 'Dj Details',
                subTitle: data.msg,
                buttons:['ok']
              });
                alert.present();
            setTimeout(()=>alert.dismiss(),3500);
        }
		})
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
        setTimeout(()=>alert.dismiss(),1500);
      }
    }

}
