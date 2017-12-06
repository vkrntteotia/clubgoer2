import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { EventsdjPage } from '../eventsdj/eventsdj';
import { VoteupdjPage } from '../voteupdj/voteupdj';
/**
 * Generated class for the VotingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voting',
  templateUrl: 'voting.html',
})
export class VotingPage {
  public extra = [1]; gg=0;
  public data: any = {};eventid;eventname;
  public songs:any = [];
  public songname = [];
  public Loader=this.loadingCtrl.create({
    content: 'Please wait...'
  });
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http,
    public appsetting: Appsetting,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    this.eventid = navParams.get("eventid");
    this.eventname = navParams.get("eventname");
  }
  
seerequests(eventtid){
  this.navCtrl.push(VoteupdjPage, {
    eventrid: eventtid
  });
}

addsong(data) {
    var jj = this;
    this.extra.push(this.extra.length + 1);
    // var bd ={
    //   'songname':data.value['songname'+this.gg],
    //   'artist':data.value['artist'+this.gg]
    //   };
    // this.songs.push(bd);
     this.gg++;
  }

send(songdata) {
  var Userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
    if(this.gg==0){
      var bd = {
      'songname':songdata.value['songname'+this.gg],
      'artist':songdata.value['artist'+this.gg],
      'eventid':this.eventid,
      'djid':Userid
      };
      this.songs.push(bd);
    }else if(this.gg>0){
      if(this.gg+1!=this.songs.length){
        this.songs=[];
        for(var i=0;i<=this.gg;i++){
          var bd = {
            'songname':songdata.value['songname'+i],
            'artist':songdata.value['artist'+i],
            'eventid':this.eventid,
            'djid':Userid
            };
          this.songs.push(bd);
        }
      }
    }
    var sendata = {
      songs:this.songs
   };

   if(this.eventid==0){
    let alertr = this.alertCtrl.create({
      title: 'Voteup request',
      subTitle: 'There is no current event to add voteup request',
    });
      alertr.present();
  setTimeout(()=>alertr.dismiss(),3500);
   } else{
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     this.Loader.present();
     this.http.post(this.appsetting.myGlobalVar + 'events/addvoteupreq', JSON.stringify(sendata), options)
     .map(res => res.json())
     .subscribe(data => {
       this.Loader.dismiss();
       if (data.isSucess == "true") {
         let alertr = this.alertCtrl.create({
             title: 'Voteup request',
             subTitle: data.msg,
           });
             alertr.present();
         setTimeout(()=>alertr.dismiss(),1500);
         this.navCtrl.push(EventsdjPage);
       } else {
        let alertr = this.alertCtrl.create({
          title: 'Voteup request',
          subTitle: data.msg,
        });
          alertr.present();
      setTimeout(()=>alertr.dismiss(),1500);
      this.navCtrl.push(EventsdjPage);
       }
     })
   }
  }

  ionViewDidLoad() {
    console.log('loaded voting');
  }

}
