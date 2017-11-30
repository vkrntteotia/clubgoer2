import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoutoutPage } from './shoutout';

@NgModule({
  declarations: [
    ShoutoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoutoutPage),
  ],
})
export class ShoutoutPageModule {}
