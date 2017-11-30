import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { DjsdetailsPage } from '../pages/djsdetails/djsdetails';
import { VotelikePage } from '../pages/votelike/votelike';
import { HttpModule } from '@angular/http';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPage } from '../pages/forgot/forgot';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';

import { ProfilePage } from '../pages/profile/profile';
import { ProfileeditPage } from '../pages/profileedit/profileedit';
import { StreamingMedia} from '@ionic-native/streaming-media';
import { EntercodePage } from '../pages/entercode/entercode';
import { HistoricalrequestsPage } from '../pages/historicalrequests/historicalrequests';
import { RequestsongplayPage } from '../pages/requestsongplay/requestsongplay';
import { ShoutoutPage } from '../pages/shoutout/shoutout';
import { SettingsPage } from '../pages/settings/settings';
import { VoteupPage } from '../pages/voteup/voteup';
import { TermsPage } from '../pages/terms/terms';
import { PrivacyPage } from '../pages/privacy/privacy';
import { PaymentinfoPage } from '../pages/paymentinfo/paymentinfo';
import { PayinfoPage } from '../pages/payinfo/payinfo';
import { DjslistPage } from '../pages/djslist/djslist';
import { SongrequestsPage } from '../pages/songrequests/songrequests';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SignupdjPage } from '../pages/signupdj/signupdj';
import { LogindjPage } from '../pages/logindj/logindj';
import { EditprofiledjPage } from '../pages/editprofiledj/editprofiledj';
import { NameofeventsdjPage } from '../pages/nameofeventsdj/nameofeventsdj';
import { PaymenthistorydjPage } from '../pages/paymenthistorydj/paymenthistorydj';
import { RequesthistorydjPage } from '../pages/requesthistorydj/requesthistorydj';
import { HelpdjPage } from '../pages/helpdj/helpdj';
import { EditeventPage } from '../pages/editevent/editevent'; 


import { TermsdjPage } from '../pages/termsdj/termsdj';
import { SignindjPage } from '../pages/signindj/signindj';
import { ChangepassworddjPage } from '../pages/changepassworddj/changepassworddj';
import { EventsdjPage } from '../pages/eventsdj/eventsdj';
import { PlaynowlistdjPage } from '../pages/playnowlistdj/playnowlistdj';
import { AddeventdjPage } from '../pages/addeventdj/addeventdj';

import { SubscribedjPage } from '../pages/subscribedj/subscribedj';
import { OmniaclubeventdjPage } from '../pages/omniaclubeventdj/omniaclubeventdj';
import { PasteventdjPage } from '../pages/pasteventdj/pasteventdj';
import { ManageeventsdjPage } from '../pages/manageeventsdj/manageeventsdj';
import { TopqueuedjPage } from '../pages/topqueuedj/topqueuedj';
import { GauranteedjPage } from '../pages/gauranteedj/gauranteedj';
import { TermsdjsubsPage } from '../pages/termsdjsubs/termsdjsubs';
import { PossiblydjPage } from '../pages/possiblydj/possiblydj';
import { VoteupdjPage } from '../pages/voteupdj/voteupdj';
import { ShoutoutdjPage } from '../pages/shoutoutdj/shoutoutdj';
import { SubscribedjupdatePage } from '../pages/subscribedjupdate/subscribedjupdate';
import { TransactionhstrydjPage } from '../pages/transactionhstrydj/transactionhstrydj';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
 import { StatusBar } from '@ionic-native/status-bar';
import { MembershipdetaildjPage } from '../pages/membershipdetaildj/membershipdetaildj';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Appsetting } from '../providers/appsetting';
import { Camera } from '@ionic-native/camera';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { VariableProvider } from '../providers/variable/variable';
import { CommonProvider } from '../providers/common/common';
import { Firebase } from '@ionic-native/firebase'; 
@NgModule({
  declarations: [
    ShoutoutdjPage,
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ForgotPage,
    SignupPage,
    ChangepasswordPage,
    ChangepassworddjPage,
    ProfilePage,
    DjsdetailsPage,
    ProfileeditPage,
    EntercodePage,
    PayinfoPage,
    VotelikePage,
    GauranteedjPage,
    HistoricalrequestsPage,
    RequestsongplayPage,
    ShoutoutPage,
    VoteupPage,
    PaymentinfoPage,
    DjslistPage,
    SettingsPage,
    TermsPage,
    TermsdjsubsPage,
    PrivacyPage,
    PossiblydjPage,
    TermsdjPage,
    SongrequestsPage,
    SignindjPage,
    EventsdjPage,
    AddeventdjPage,
    TopqueuedjPage,
    SubscribedjPage,
    OmniaclubeventdjPage,
    PasteventdjPage,
    ManageeventsdjPage,
    SignupdjPage,
    LogindjPage,
    EditprofiledjPage,
    NameofeventsdjPage,
    TransactionhstrydjPage,
    PlaynowlistdjPage,
    HelpdjPage,
    SubscribedjupdatePage,
    RequesthistorydjPage,
    PaymenthistorydjPage,
    MembershipdetaildjPage,
    VoteupdjPage,
    EditeventPage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    EditeventPage,
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ForgotPage,
    ChangepasswordPage,
    ChangepassworddjPage,    
    ProfilePage,
    PayinfoPage,
    DjsdetailsPage,
    ProfileeditPage,
    TermsdjPage,
    EntercodePage,
    VotelikePage,
    HistoricalrequestsPage,
    MembershipdetaildjPage,
    RequestsongplayPage,
    ShoutoutPage,
    SettingsPage,
    VoteupPage,
    PossiblydjPage,
    GauranteedjPage,
    TermsPage,
    PaymentinfoPage,
    PrivacyPage,
    TopqueuedjPage,
    DjslistPage,
    SongrequestsPage,
    SignindjPage,
    EventsdjPage,
    AddeventdjPage,
    SubscribedjPage,
    TermsdjsubsPage,
    OmniaclubeventdjPage,
    PasteventdjPage,
    ManageeventsdjPage,
    SignupdjPage,
    LogindjPage,
    SubscribedjupdatePage,
    EditprofiledjPage,
    NameofeventsdjPage,
    TransactionhstrydjPage,
    PlaynowlistdjPage,
    HelpdjPage,
    VoteupdjPage,
    ShoutoutdjPage,
    RequesthistorydjPage,
    PaymenthistorydjPage,
   
  ],
  providers: [
    Firebase,
    Appsetting,
    SplashScreen,
  StatusBar,
    Camera,
    Facebook,
    InAppBrowser,
    PayPal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VariableProvider,
    CommonProvider,
    StreamingMedia
  ]
})
export class AppModule {}
