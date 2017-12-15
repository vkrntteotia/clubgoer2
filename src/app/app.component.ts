import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, Events, MenuController ,ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { DjslistPage } from '../pages/djslist/djslist';
import { TermsPage } from '../pages/terms/terms';
import { PrivacyPage } from '../pages/privacy/privacy';
import { Appsetting } from '../providers/appsetting';
import { VotelikePage } from '../pages/votelike/votelike';
//import { ShoutoutdjPage } from '../pages/shoutoutdj/shoutoutdj';
import { HistoricalrequestsPage } from '../pages/historicalrequests/historicalrequests';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { TransactionhstrydjPage } from '../pages/transactionhstrydj/transactionhstrydj';
import { HelpdjPage } from '../pages/helpdj/helpdj';
import { LogindjPage } from '../pages/logindj/logindj';
import { LoginPage } from '../pages/login/login';
import { MembershipdetaildjPage } from '../pages/membershipdetaildj/membershipdetaildj';
import { ChangepassworddjPage } from '../pages/changepassworddj/changepassworddj';
import { SignindjPage } from '../pages/signindj/signindj';
import { EventsdjPage } from '../pages/eventsdj/eventsdj';
import { EditprofiledjPage } from '../pages/editprofiledj/editprofiledj';
import { NameofeventsdjPage } from '../pages/nameofeventsdj/nameofeventsdj';
import { TermsdjPage } from '../pages/termsdj/termsdj';
import { Firebase } from '@ionic-native/firebase';
import { NotificationdjPage } from '../pages/notificationdj/notificationdj';

import * as moment from 'moment'
// import {StatusBar} from '@ionic-native/status-bar';


export class NotificationModel {
	public body: string;
	public title: string;
	public tap: boolean
}

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = SignindjPage;
  activePage: any; user;
  public video;datav;
  role;profile;
  pages: Array<{ title: string, component: any, icon: any }>;
  djmenu: Array<{ title: string, component: any, icon: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public firebase: Firebase,
    public splashScreen: SplashScreen,
    public appsetting: Appsetting,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public events: Events,
    public menuCtrl: MenuController
  ) {
    
    platform.ready().then(() => {
    
      statusBar.overlaysWebView(true);
      
      statusBar.hide();
      this.firebase.grantPermission();   // for push notifications
			if (this.platform.is('cordova')) {
				// Initialize push notification feature
				//alert("hiiii"+this.platform)
				if (this.platform.is('android')) {
					//alert("android"+this.platform)
					this.initializeFireBaseAndroid()
				} else {
					//	alert("ios"+this.platform)
					this.initializeFireBaseIos();
				}
				//this.platform.is('android') ? this.initializeFireBaseAndroid() : this.initializeFireBaseIos();
			} else {
				//	alert(this.platform)
				console.log('Push notifications are not enabled since this is not a real device');
			}
});

    this.initializeApp();
    this.events.subscribe('role', data => {
      //console.log(data);
      //this.role = data;
      if (localStorage.getItem("USER_DATA")!=null) {   
        this.profile = JSON.parse(localStorage.getItem("USER_DATA"));
        console.log(this.profile);
      if (this.profile.role == 'clubgoer') {
        this.role="clubgoer";
        this.pages = [
          { title: 'Home', component: HomePage, icon: 'homecustom' },
          { title: 'My Profile', component: ProfilePage, icon: 'profile' },
          { title: 'Voteup Request', component: VotelikePage, icon: 'voteup' },
          { title: 'Djs List', component: DjslistPage, icon: 'djs' },
          { title: 'Historical Transactions', component: HistoricalrequestsPage, icon: 'historical' },
          { title: 'Terms and Conditions', component: TermsPage, icon: 'terms' },
          { title: 'Privacy Policy', component: PrivacyPage, icon: 'privacy' },
          { title: 'Change Password', component: ChangepasswordPage, icon: 'historical' },
          //{ title: 'Payment Info', component: PaymentinfoPage, icon: 'terms' },
          { title: 'Sign Out', component: null, icon: 'logout' },
        ];
        this.menuCtrl.enable(true, 'clubgoer');
      } else {
        this.role="dj";
        this.djmenu = [
          { title: 'Events', component: EventsdjPage, icon: 'eve' },
          { title: 'Edit Profile', component: EditprofiledjPage, icon: 'edi' },
          { title: 'Transaction History', component: TransactionhstrydjPage, icon: 'tra' },
          { title: 'Requests', component: NameofeventsdjPage, icon: 'req' },
          { title: 'Terms and Conditions', component: TermsdjPage, icon: 'ter' },
          { title: 'Billing', component: MembershipdetaildjPage, icon: 'logo-usd' },
          { title: 'Notifications', component: NotificationdjPage, icon: 'notifications' },
          { title: 'Help', component: HelpdjPage, icon: 'hel' },];
          if(localStorage.getItem("fblogin")==null){
            this.djmenu.push({ title: 'Change Password', component: ChangepassworddjPage, icon: 'historical' });
          }          
          this.djmenu.push({ title: 'Sign Out', component: null, icon: 'log' });
          this.menuCtrl.enable(true, 'dj');
      }
    }
  })
  }

  private initializeFireBaseAndroid(): Promise<any> {
		return this.firebase.getToken()
			.catch(error => console.error('Error getting token', error))
			.then(token => {

				console.log(`The token is ${token}`);

				Promise.all([
					this.firebase.subscribe('firebase-app'), 	// Subscribe to the entire app
					this.firebase.subscribe('android'),			// Subscribe to android users topic
					this.firebase.subscribe('userid-1') 		// Subscribe using the user id (hardcoded in this example)
				]).then((result) => {
					if (result[0]) console.log(`Subscribed to FirebaseDemo`);
					if (result[1]) console.log(`Subscribed to Android`);
					if (result[2]) console.log(`Subscribed as User`);

					this.subscribeToPushNotificationEvents();
				});
			});
	}

  private initializeFireBaseIos(): Promise<any> {
		return this.firebase.grantPermission()
			.catch(error => console.error('Error getting permission', error))
			.then(() => {
				this.firebase.getToken()
					.catch(error => console.error('Error getting token', error))
					.then(token => {

						console.log(`The token is ${token}`);

						Promise.all([
							this.firebase.subscribe('firebase-app'),
							this.firebase.subscribe('ios'),
							this.firebase.subscribe('userid-2')
						]).then((result) => {
							if (result[0]) console.log(`Subscribed to FirebaseDemo`);
							if (result[1]) console.log(`Subscribed to iOS`);
							if (result[2]) console.log(`Subscribed as User`);

							this.subscribeToPushNotificationEvents();
						});
					});
			})

  }
    private saveToken(token: any): Promise<any> {
		console.log('Sending token to the server...');
		return Promise.resolve(true);
  }
  
  private subscribeToPushNotificationEvents(): void {
    
        //	alert("hello everyone");
        // Handle token refresh
        this.firebase.onTokenRefresh().subscribe(
          token => {
            console.log(`The new token is ${token}`);
            this.saveToken(token);
          },
          error => {
            console.error('Error refreshing token', error);
          });
          this.firebase.onNotificationOpen().subscribe(
            (notification: NotificationModel) => {
            //	alert('alert - > ' + JSON.stringify(notification))
               if(notification.tap){
                // alert('Tapped');
                this.user = localStorage.getItem("USER_DATA");
                // alert(this.user);
                // alert(JSON.stringify(this.user));
                if (this.user == undefined || this.user == null) {
                  				this.nav.push(LogindjPage);
                  			} else {
                  				this.nav.push(NotificationdjPage, { message: notification }); //this.nav.setRoot(this.pages2.SchedulePage);
                  			}
                console.log("Received in background");
              } else {
                // alert('Not Tapped');
                console.log("Received in foreground");
              };
              // !notification.tap
              // 	? console.log('The user was using the app when the notification arrived...')
              // 	: console.log('The app was closed when the notification arrived...')
      
              let toast = this.toastCtrl.create({
                message: '' + notification.title + ': '+notification.body ,
                duration: 3000,
                position:"top",
                cssClass: "notification",
              });
              // let notificationAlert = this.alertCtrl.create({
              // 	title: '<center>' + notification.title + '</center>',
              // 	message: notification.body,
              // 	buttons: [{
              // 		text: 'Ignore',
              // 		role: 'cancel'
              // 	}, {
              // 		text: 'View',
              // 		handler: () => {
              // 			//TODO: Your logic here
              // 			this.user = localStorage.getItem('USERID');
              // 			//alert('user' + this.user)
              // 			if (this.user == undefined || this.user == null) {
              // 				this.nav.push(SigninPage);
              // 			} else {
              // 				this.nav.push(TabsPage, { message: notification }); //this.nav.setRoot(this.pages2.SchedulePage);
              // 			}
      
              // 		}
              // 	}]
              // });
      
              if (notification.title != undefined) {
                toast.present();
              }
            },
            error => {
              console.error('Error getting the notification', error);
            });
          }

 
  initializeApp() {
    this.platform.ready().then(() => {
      //  this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.rootPage = SignindjPage;
      if (localStorage.getItem('role')!=null) { 
        if (localStorage.getItem('role') == 'clubgoer') {
          this.rootPage = localStorage.getItem("USER_DATA") != null ? HomePage : SignindjPage;
        } else {
          this.rootPage = localStorage.getItem("USER_DATA") != null ? EventsdjPage : SignindjPage;
          //this.rootPage = (JSON.parse(localStorage.getItem("USER_DATA")).subscription_status!=1) ? SubscribedjPage : localStorage.getItem("USER_DATA") != null ? EventsdjPage : SignindjPage;
        } 
      }
  if(localStorage.getItem("USER_DATA") != null) {
        this.profile = JSON.parse(localStorage.getItem("USER_DATA"));
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component) {
      this.nav.setRoot(page.component);
      this.activePage = page;
    } else {
      if(localStorage.getItem('role')=="dj")
      {
        this.menuCtrl.enable(false, 'dj');
      } else {
        this.menuCtrl.enable(false, 'clubgoer');
      }
      localStorage.removeItem("fblogin");
      localStorage.removeItem("USER_DATA");
      localStorage.removeItem("facebook_pic");
      localStorage.removeItem("facebook_login");
      localStorage.removeItem("userid");
      localStorage.removeItem("fblogin");
      //localStorage.removeItem('role');
      //localStorage.clear();
      let alert = this.alertCtrl.create({
        title: 'Logged out',
        subTitle: "Logged out successfully",
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 1000);
      if(localStorage.getItem('role')=="dj")
      {
        this.nav.setRoot(LogindjPage);
      } else {
        this.nav.setRoot(LoginPage);
      }
      
    }
  }
  public checkActivePage(page): boolean {
    return page === this.activePage;
  }
  
 
}
