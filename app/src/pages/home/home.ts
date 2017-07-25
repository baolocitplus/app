import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';
import {BepBarPage} from '../bep-bar/bep-bar';
import { ManagePage} from '../manage/manage';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  orderload(){
    this.navCtrl.push(LoginPage);
  }
  bepbarload(){
    this.navCtrl.push(LoginPage);
  }
  manageload(){
    this.navCtrl.push(LoginPage);
  }
}
