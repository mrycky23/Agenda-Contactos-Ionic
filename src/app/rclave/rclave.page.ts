import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AccesoService } from '../servicio/acceso.service';
import { AuthService } from '../servicio/auth.service';

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
    private authService: AuthService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  recoverPassword() {
    this.authService.recoverPassword(this.email).subscribe(
      (response: any) => {
        if (response.estado) {
          alert('Se ha enviado un correo con el enlace para restablecer la contraseña.');
          this.modalCtrl.dismiss();
        } else {
          alert(response.mensaje);
          this.modalCtrl.dismiss();
        }
      },
      (error) => {
        console.error('Error al solicitar la recuperación', error);
        alert('Ocurrió un error. Inténtalo nuevamente.');
        this.modalCtrl.dismiss();
      }
    );
  }
}
