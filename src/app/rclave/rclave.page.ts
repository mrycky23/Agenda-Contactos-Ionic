import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccesoService } from '../servicio/acceso.service';

@Component({
  selector: 'app-rclave',
  templateUrl: './rclave.page.html',
  styleUrls: ['./rclave.page.scss'],
  standalone: false,
})
export class RclavePage implements OnInit {

  email: string = "";

  constructor(
    private navCtrl: NavController,
    private servicio: AccesoService
  ) { }

  ngOnInit() {
  }

  async recuperarClave(){
    if (!this.email) {
      await this.servicio.showToast('Por favor, ingresa tu correo electrónico.', 2000);
      return;
    }
    await this.servicio.recoverPassword(this.email);
   
  }
}
