import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CancionesPage } from '../canciones/canciones';
import { ImagenPage } from '../imagen/imagen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Cancion = CancionesPage
Imagen = ImagenPage
  constructor(public navCtrl: NavController) {

  }
Canciones1()
{
  this.navCtrl.push(this.Cancion)
}
Imagen1()
{
  this.navCtrl.push(this.Imagen)
}
}
