import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotelikePage } from './votelike';

@NgModule({
  declarations: [
    VotelikePage,
  ],
  imports: [
    IonicPageModule.forChild(VotelikePage),
  ],
})
export class VotelikePageModule {}
