import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

/**
 * Generated class for the VoteupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-votelike',
  templateUrl: 'votelike.html',
})
export class VotelikePage {
  public requests;request;
    public djid;eventid;
  constructor(public navCtrl: NavController,
  public navParams: NavParams, 
  public http:Http,
  public appsetting: Appsetting,
  public loadingCtrl:LoadingController,
   private alertCtrl: AlertController) {
      this.djid = navParams.get("djid");
      this.eventid = navParams.get("eventid");
      this.userrequests();
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
  userrequests(){
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
    this.Loading.present();
    var User = JSON.parse(localStorage.getItem("USER_DATA"));
    var userid = User.id;
		var postdata = {
			userid: userid
		};
    console.log(postdata);
		var serialized = this.serializeObj(postdata);
		this.http.post(this.appsetting.myGlobalVar + 'users/userrequestslike', serialized, options).map(res => res.json()).subscribe(data => {
			this.Loading.dismiss();
      if(data.isSucess == "true"){
            this.requests=data.data;
      }else{
            let alert = this.alertCtrl.create({
                title: 'Dj Details',
                subTitle: data.msg,
                buttons:['ok']
              });
                alert.present();
            setTimeout(()=>alert.dismiss(),1500);
      }
		})
	}

  likeusrrequest(id,likem,index){
    let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
    var User = JSON.parse(localStorage.getItem("USER_DATA"));
    var userid = User.id;
		var postdata = {
			userid:userid,
      djid:this.djid,
      requestid:id,
      eventid:this.eventid,
      like:likem
		};
    this.Loading.present();
		var serialized = this.serializeObj(postdata);
		this.http.post(this.appsetting.myGlobalVar + 'users/likeusrrequest', serialized, options).map(res => res.json()).subscribe(data => {
			this.Loading.dismiss();
      if(data.isSucess == "true"){
            //this.requests=data.data;
            this.requests[index].ClubgoerRequest.like=data.like;
            if(data.msg=="Unliked successfully"){
              this.requests[index].RequestLike.length--;
            }else{
              this.requests[index].RequestLike.length++;
            }
            let alert = this.alertCtrl.create({
                title: 'Voteup Request',
                subTitle: data.msg,
                buttons:['ok']
              });
                alert.present();
            setTimeout(()=>alert.dismiss(),3500);
      }else{
            let alert = this.alertCtrl.create({
                title: 'Voteup Request',
                subTitle: data.msg,
              });
                alert.present();
            setTimeout(()=>alert.dismiss(),3500);
      }
		})
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
