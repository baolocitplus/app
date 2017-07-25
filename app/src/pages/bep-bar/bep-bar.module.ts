import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BepBarPage } from './bep-bar';

@NgModule({
  declarations: [
    BepBarPage,
  ],
  imports: [
    IonicPageModule.forChild(BepBarPage),
  ],
  exports: [
    BepBarPage
  ]
})
export class BepBarPageModule {}
