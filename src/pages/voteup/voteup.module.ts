import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoteupPage } from './voteup';

@NgModule({
  declarations: [
    VoteupPage,
  ],
  imports: [
    IonicPageModule.forChild(VoteupPage),
  ],
})
export class VoteupPageModule {}
