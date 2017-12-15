import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { PayinfoPage } from '../payinfo/payinfo';
/**
 * Generated class for the RequestsongplayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requestsongplay',
  templateUrl: 'requestsongplay.html',
})
export class RequestsongplayPage {
  public data:any={};djid;eventid;testn;
  public price;
  public request:any;
  public requestp:any;
  public flag:boolean;
  public minprice:any;
  constructor(public navCtrl: NavController,
  public navParams: NavParams, 
  public http:Http,
  public appsetting: Appsetting,
  public loadingCtrl:LoadingController,
   private alertCtrl: AlertController) {
        this.flag=false;
        this.djid = navParams.get("djid");
        this.eventid = navParams.get("eventid");
  }
  public Loading=this.loadingCtrl.create({
    content: 'Please wait...',
    dismissOnPageChange: true
  });

setflag(i){
  this.flag=true;
  if(this.requestp!=null){
    // console.log(this.testn);
    if(this.testn==false){
      if(i==0){
        this.minprice = this.requestp.TipOptionPrice.playnow;
      }else if(i==1){
        this.minprice = this.requestp.TipOptionPrice.guareteedplay;
      }else if(i==2){
        this.minprice = this.requestp.TipOptionPrice.possiblyplay;
      }
    }else{
      if(i==0){
        this.minprice = this.requestp[0].TipOption.price;
      }else if(i==1){
        this.minprice = this.requestp[1].TipOption.price;
      }else if(i==2){
        this.minprice = this.requestp[2].TipOption.price;
      }
    }
  }
}

setAlert(i){  
  if( i==0){

    let alert = this.alertCtrl.create({
      title: 'Play Now Info.',
      subTitle: 'Lorem ipsum dolor sit amet.',
      buttons:['ok']
      
    });
    alert.present();
  }
  if( i==1){
    
        let alert = this.alertCtrl.create({
          title: 'Guaranteed Info.',
          subTitle: 'Lorem ipsum dolor sit amet.',
          buttons:['ok'] 
          
        });
        alert.present();
      }
      if( i==2){
             let alert = this.alertCtrl.create({
              title: 'Possibly Play Info.',
              subTitle: 'Lorem ipsum dolor sit amet.',
              buttons:['ok']
              
            });
            alert.present();
          }
 
  //setTimeout(()=>alert.dismiss(),3500);
}

requestsong(form){
    // console.log(form.value);
    // console.log("Hello");
    // console.log(this.minprice);
    if(form.value.requeststype==undefined){
      let alert = this.alertCtrl.create({
                title: 'Request a song',
                subTitle: 'Please select request option',
                buttons:['ok']
              });
                alert.present();
              setTimeout(()=>alert.dismiss(),3500);
    }
    else{
               if(form.value.tipamt!=""){
                if(parseInt(form.value.tipamt)<this.minprice){
                  let alert = this.alertCtrl.create({
                  title: 'Request a song',
                  subTitle: 'Tip amount should be greater than minimum tip',
                  buttons:['ok']
                });
                alert.present();
                setTimeout(()=>alert.dismiss(),3500);
                    return false;
                }
            }
		var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
    if(form.value.tipamt==undefined){
         this.price = this.minprice;
    } else if(parseInt(form.value.tipamt)<=this.minprice || parseInt(form.value.tipamt)==NaN){
         this.price = this.minprice;
    }
    else{
         this.price = form.value.tipamt;
    }
		var postdata = {
			userid: user_id,
      djid:this.djid,
      eventid:this.eventid,
      artistname:form.value.artistname,
      songname:form.value.name,
      requestype:1,
      requestsoption:form.value.requeststype,
      price:this.price
    };
     console.log(postdata);
    this.navCtrl.push(PayinfoPage, {
                postdata: postdata
              })
    }
}

serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
      return result.join("&");
  }

showreqtype() {
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
		var postdata = {
			userid: user_id,
      djid:this.djid,
      eventid:this.eventid
		};
    this.Loading.present();

		var serialized = this.serializeObj(postdata);
		this.http.post(this.appsetting.myGlobalVar + 'tipOptions/showreqtype', serialized, options).map(res => res.json()).subscribe(data => {
			this.Loading.dismiss();
      if(data.isSucess == "true"){
              this.request = data.data;
              if(data.data2.length!=undefined){
                this.requestp = data.data;
                this.testn = true;
              }else{
                this.requestp = data.data2;
                this.testn = false;
              }   
      }else{
              let alert = this.alertCtrl.create({
                title: 'Request a song',
                subTitle: data.msg,
                buttons:['ok']
              });
                alert.present();
              setTimeout(()=>alert.dismiss(),3500);
    }
		})
  }

  ionViewCanEnter(){
    this.showreqtype();
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
       setTimeout(()=>alert.dismiss(),3500);
      }
    }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad RequestsongplayPage');
  }

}
