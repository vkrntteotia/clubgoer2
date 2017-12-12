webpackJsonp([0],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribedjPageModule", function() { return SubscribedjPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscribedj__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubscribedjPageModule = (function () {
    function SubscribedjPageModule() {
    }
    return SubscribedjPageModule;
}());
SubscribedjPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__subscribedj__["a" /* SubscribedjPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subscribedj__["a" /* SubscribedjPage */]),
        ],
    })
], SubscribedjPageModule);

//# sourceMappingURL=subscribedj.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribedjPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__termsdjsubs_termsdjsubs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { LogindjPage } from '../logindj/logindj';

/**
 * Generated class for the SubscribedjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubscribedjPage = (function () {
    function SubscribedjPage(navCtrl, navParams, events, appsetting, http, loadingCtrl, payPal, alertCtrl, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.payPal = payPal;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.data = {};
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.events.publish('role', 'dj');
        this.reguserid = navParams.get("usersignupid");
        this.data = {
            checkbx: true,
        };
        this.subscribeplan();
    }
    SubscribedjPage.prototype.subscribeplan = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userdata = JSON.parse(localStorage.getItem("USER_DATA"));
        var data = {
            role: userdata.role,
        };
        var Serialized = this.serializeObj(data);
        this.http.post(this.appsetting.myGlobalVar + 'subscriptions/getSubscription', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            if (response.isSuccess == "true") {
                _this.subscriv = response.data;
            }
        });
    };
    SubscribedjPage.prototype.ionViewDidEnter = function () {
        if (window.navigator.onLine == true) {
        }
        else {
            this.Loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Network connection',
                subTitle: 'Something went wrong check your internet connection',
                buttons: ['ok']
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 2500);
        }
    };
    SubscribedjPage.prototype.setBackButtonAction = function () {
        //Write here wherever you wanna do
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
    };
    SubscribedjPage.prototype.subscribe = function (chkbx, amt) {
        var _this = this;
        var userdat = JSON.parse(localStorage.getItem("USER_DATA"));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem("USER_DATA")).id;
        this.Loading.present();
        var data = {
            user_id: userid,
        };
        var serialized = this.serializeObj(data);
        if (chkbx == false) {
            var alertr_1 = this.alertCtrl.create({
                title: '',
                subTitle: "Please accept the terms & conditions",
                buttons: ['ok']
            });
            alertr_1.present();
            setTimeout(function () { return alertr_1.dismiss(); }, 3500);
        }
        else {
            var paydata = {
                'amount': amt,
                'userid': userdat.id
            };
            //console.log(amt);
            var target = "_blank";
            var option = "location=no,hidden=no";
            var browser = this.iab.create('http://vikrant.crystalbiltech.com/vikkitestrecurring/index.php?data=' + encodeURIComponent(JSON.stringify(paydata)), target, option);
            //browser.close();
            browser.on('loadstart').subscribe(function (e) {
                var redirect_uri = e.url.split('success.php');
                var redirect_cancel = e.url.split('cancel.php');
                if (redirect_uri[0] == "https://vikrant.crystalbiltech.com/vikkitestrecurring/") {
                    browser.close();
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Subscribed',
                        subTitle: "Successfully subscribed",
                        buttons: ['ok']
                    });
                    alert_2.present();
                    setTimeout(function () { return alert_2.dismiss(); }, 3500);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventsdj_eventsdj__["a" /* EventsdjPage */]);
                }
                else if (redirect_cancel[0] == 'https://vikrant.crystalbiltech.com/vikkitestrecurring/') {
                    browser.close();
                    var alertr_2 = _this.alertCtrl.create({
                        title: 'Subscribed',
                        subTitle: 'Subscription not alloted',
                        buttons: ['ok']
                    });
                    alertr_2.present();
                    setTimeout(function () { return alertr_2.dismiss(); }, 3000);
                }
            }, function (err) {
                //console.log("InAppBrowser loadstart Event Error: " + err);
                // alert(err)
            });
        }
        //     let headers = new Headers();
        //    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        //    let options = new RequestOptions({ headers: headers });
        //    var userdata = JSON.parse(localStorage.getItem("USER_DATA"));
        //    var data = {
        //        user_id : userdata.id,
        //        sub_id : this.subscriv.id
        //      }
        //    var Serialized = this.serializeObj(data);
        //    if(chkbx==false){
        //      let alertr = this.alertCtrl.create({
        //        title: '',
        //        subTitle: "Please accept the terms & conditions",
        //        buttons:['ok']
        //         
        //      });
        //        alertr.present();
        //    setTimeout(()=>alertr.dismiss(),3500);
        //    }else{
        //    this.payPal.init({
        //      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
        //  PayPalEnvironmentSandbox: 'AUQH6SoDJmAlXBpqHMZYv-TJPr5CVCpCqfbMCkLqKsQZBUdL1DIyIDcTqqx5jC4Y6F9UEzcVhM_kAZWO'
        //}).then(() => {
        //  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        //  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        //    // Only needed if you get an "Internal Service Error" after PayPal login!
        //    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        //  })).then(() => {
        //    let payment = new PayPalPayment(this.subscriv.monthly_rate, 'USD', 'Dj subscription', 'sale');
        //    this.payPal.renderSinglePaymentUI(payment).then(() => {
        //      this.http.post(this.appsetting.myGlobalVar + 'subscriptions/savesubscription', Serialized, options).map(res => res.json()).subscribe(response => {
        //        if(response.isSucess=="true"){
        //           
        //          // alert(JSON.stringify(response.data));
        //          localStorage.removeItem('USER_DATA');
        //          localStorage.setItem("USER_DATA", JSON.stringify(response.data.User));
        //          console.log('role',response.data.User.role);
        //          // alert(response.data.User.role);
        //          
        //            let alertr = this.alertCtrl.create({
        //                title: 'Subscribed',
        //                subTitle: response.msg,
        //                buttons:['ok']
        //                }); 
        //                alertr.present();
        //            //setTimeout(()=>alertr.dismiss(),4000);
        //            if(response.data.User.role == 'dj'){
        //              this.events.publish('role', 'dj');
        //            }else{
        //              this.events.publish('role', 'clubgoer');
        //            }
        //            this.navCtrl.push(EventsdjPage);
        //        }else{
        //            let alert = this.alertCtrl.create({
        //                title: 'Subscribed',
        //                subTitle: response.msg,
        //                buttons:['ok']
        //              });
        //                alert.present();
        //            //setTimeout(()=>alert.dismiss(),4000);
        //        }
        //    });
        //    }, () => {
        //      // Error or render dialog closed without being successful
        //    });
        //  }, () => {
        //    // Error in configuration
        //  });
        //}, () => {
        //  // Error in initialization, maybe PayPal isn't supported or something else
        //});
        //  }
    };
    SubscribedjPage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__termsdjsubs_termsdjsubs__["a" /* TermsdjsubsPage */]);
    };
    SubscribedjPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SubscribedjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscribedjPage');
    };
    return SubscribedjPage;
}());
SubscribedjPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subscribedj',template:/*ion-inline-start:"/Volumes/D/rahulsingh/clubgoer2/src/pages/subscribedjold/subscribedj.html"*/'<!--\n  Generated template for the SubscribedjPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="black">\n		<ion-title>Subscription Plan</ion-title>\n		<button (click)="setBackButtonAction()"ion-button="bar-button">\n        <span class="button-inner"><ion-icon class="back-button-icon icon icon-ios back-button-icon-ios ion-ios-arrow-back" role="img" aria-label="arrow back"></ion-icon>\n        <span class="back-button-text back-button-text-ios" style="transform: translateX(0px);"></span></span>\n        <div class="button-effect"></div>\n    </button>\n    <div class="logo">\n    	<img src="assets/img/rlogo.png">\n    </div>\n</ion-navbar>\n</ion-header>\n<ion-content padding>\n		<div class="content-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col>\n						<div class="top-sec">\n							<h4>{{subscriv?.plan_name}}</h4>\n							<p>{{subscriv?.description}}</p>\n						</div>\n						<div class="bottom-sec">\n							<h1>${{subscriv?.monthly_rate}}</h1>\n							<p>Recurring</p>\n							<h1 class="term">\n								<span>\n								<ion-checkbox color="dark" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n							</span>\n							I accept the <a style="text-decoration: underline;" button (click)="terms()" clear item-right>terms and conditions.</a>\n							</h1>\n\n							<!-- <ion-item class="remember" style="border:none; width: 50%; float: left;">\n								<ion-label style="color:#000;">I accept the terms and conditions.</ion-label>\n								<ion-checkbox color="secondary" checked="true" [(ngModel)]="data.checkbx" name="checkbx" #checkbx=\'ngModel\'></ion-checkbox>\n							</ion-item> -->\n							<button ion-button (click)="subscribe(data.checkbx,subscriv?.monthly_rate)">Subscribe</button>\n						</div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	</ion-content>	\n'/*ion-inline-end:"/Volumes/D/rahulsingh/clubgoer2/src/pages/subscribedjold/subscribedj.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["a" /* PayPal */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], SubscribedjPage);

//# sourceMappingURL=subscribedj.js.map

/***/ })

});
//# sourceMappingURL=0.js.map