import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { Stripe } from '@ionic-native/stripe';
import { EventsdjPage } from '../eventsdj/eventsdj';

/**
 * Generated class for the AddCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCardPage {

public card:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http,
    public appsetting: Appsetting,private stripe: Stripe,public alertCtrl:AlertController,
    public loadingCtrl: LoadingController,
  ) {
     
  }
  
  private add_card(formdata){
    var user_id = JSON.parse(localStorage.getItem("USER_DATA")).id;
      console.log(formdata.value);
       let headers = new Headers();
  headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
  let options= new RequestOptions({ headers: headers });
  var email = JSON.parse(localStorage.getItem("USER_DATA")).email;
  this.stripe.setPublishableKey('pk_test_gGw0nKJtPn2n9zGD1JuR7iV6');


let card = {
 number: formdata.value.cardnumber,
 expMonth: formdata.value.month,
 expYear: formdata.value.year,
 cvc: formdata.value.cvc,
};
console.log(card);
this.stripe.createCardToken(card)
   .then(token => {
   console.log(token.id);
  //  alert('success');
  //  alert(token.id);
    var data ={
   email: email,
   price: this.navParams.get('amount'),
   token: token.id,
   userid: user_id
   }
 var Serialized = this.serializeObj(data);
 var Loading = this.loadingCtrl.create({
  content: 'Please wait...',
});
Loading.present().then(() => {
 this.http.post(this.appsetting.myGlobalVar + 'subscriptions/stripe', Serialized, options).map(res=>res.json()).subscribe(response=>{
    console.log(response);
    Loading.dismiss();
    //alert(JSON.stringify(response));
    if(response.isSuccess == 'true'){
      //alert('Subscribed thank you! Enjoy your features');
      let alert = this.alertCtrl.create({
        title: 'Subscription',
        subTitle: 'Subscribed Successfully! Enjoy your features',
        buttons:['ok']
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 2500);
      this.navCtrl.push(EventsdjPage);
      localStorage.removeItem("USER_DATA");
      localStorage.setItem("USER_DATA", JSON.stringify(response.data));
    }else{
      //alert('Something went wrong!');
      let alert = this.alertCtrl.create({
        title: 'Subscription',
        subTitle: 'Something went wrong',
        buttons:['ok']
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 2500);
    }
       
   })
   })
  })
   .catch(error => {
   console.error(error);
   alert(JSON.stringify(error));
   
   });
  }

  
  
   cardFormat(number) {
   console.log('hero');
    console.log(number);
    if (number.length == 4) {
      this.card.cardnumber = number + '-';

    } else if (number.length == 9) {
      this.card.cardnumber = number + '-';
    }else if (number.length == 14) {
      this.card.cardnumber = number + '-';
    }
  }
  
  dateFormat(date){
  console.log(date);
  if(date.length == 2){
      this.card.mmyy = date+'/';
    }
}
contactFormat(number){
  console.log(number);
  if(number.length == 3){
      this.card.contact = number+'-'
  } else if (number.length == 7){
      this.card.contact = number+'-';
  }
}
 serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCardPage');
  }

}
