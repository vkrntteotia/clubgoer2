import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayinfoPage } from './payinfo';

@NgModule({
  declarations: [
    PayinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PayinfoPage),
  ],
})
export class PayinfoPageModule {}
