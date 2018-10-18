import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
})
export class CancionesPage {
canciones = ["Title",
  "Teaser Music #1",
  "Ordon Village",
  "Midna’s Theme",
  "Hyrule Field (Main Theme)",
  "Light Spirit",
  "Kakariko Village",
  "Death Mountain",
  "Queen Rutela’s Theme",
  "Lake Hylia",
  "Boss Battle Part 3",
  "Midna’s Desperation",
  "Sacred Grove",
  "Malo Mart",
  "Ilia’s Theme",
  "Hidden Village",
  "Princess Zelda’s Theme",
  "Final Battle Part 4",
  "Staff Roll Part 1",
  "Teaser Music #2"]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPage');
  }

}
