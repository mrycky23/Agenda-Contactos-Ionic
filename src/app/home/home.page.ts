import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
txt_usuario: string = "";
txt_clave: string = "";  
  constructor( private loadingCtrl: LoadingController) {}

  login()
  {

  }

  crearCuenta()
  {

  }

  reestablecerClave()
  {

  }

}
