import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DjslistPage } from './djslist';

@NgModule({
  declarations: [
    DjslistPage,
  ],
  imports: [
    IonicPageModule.forChild(DjslistPage),
  ],
})
export class DjslistPageModule {}
