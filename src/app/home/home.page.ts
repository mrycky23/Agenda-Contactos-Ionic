import { Component } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { AccesoService } from '../servicio/acceso.service';
import { CuentaPage } from '../cuenta/cuenta.page';
import { RclavePage } from '../rclave/rclave.page';
import { IngresoTokenPage } from '../ingreso-token/ingreso-token.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {
txt_usuario: string = "";
txt_clave: string = "";

  constructor( 
    private navCtrl: NavController,
    private servicio: AccesoService,
    private modalCtrl: ModalController
  ) {}

  login()
  {
    let datos={
      accion:'login',
      usuario: this.txt_usuario,
      clave: this.txt_clave
    }
    this.servicio.postData(datos).subscribe((res:any)=>{
      if(res.estado){
        //Almacena localmente los datos del usuario
       this.servicio.createSesion('idpersona', res.persona.codigo)
       this.servicio.createSesion('persona', res.persona.nombre)
       this.servicio.createSesion('cedula', res.persona.cedula)
       this.servicio.createSesion('correo', res.persona.correo)
       this.navCtrl.navigateRoot(['/menu'])
      }else{
        this.servicio.showToast("No existe persona", 3000)
      }
    });
  }

  async ingresarToken(){
    const modal = await this.modalCtrl.create({
      component: IngresoTokenPage
    });
    return await modal.present();
    
  }

  async crearCuenta()
  {
    const modal = await this.modalCtrl.create({
      component: CuentaPage
    });
    return await modal.present();
  }

  async reestablecerClave()
  {
    const modal = await this.modalCtrl.create({
      component: RclavePage
    });
    return await modal.present();
  }

}
