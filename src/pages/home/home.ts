import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CancionesPage } from '../canciones/canciones';
import { ImagenPage } from '../imagen/imagen';
import { ArtistaPage } from '../artista/artista';
import { StarPage } from '../star/star';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Cancion = CancionesPage
Imagen = ImagenPage
Artista = ArtistaPage
Star =StarPage
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
Artista1()
{
  this.navCtrl.push(this.Artista)
}
Star1()
{
  this.navCtrl.push(this.Star)
}
}
