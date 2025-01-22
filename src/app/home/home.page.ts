import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AccesoService } from '../servicio/acceso.service';

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
    private servicio: AccesoService
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
       this.servicio.createSesion('idpersona', res.persona.codigo)
       this.servicio.createSesion('persona', res.persona.nombre)
       this.navCtrl.navigateRoot(['/menu'])
      }else{
        this.servicio.showToast("No existe persona", 3000)
      }
    });
  }

  crearCuenta()
  {

  }

  reestablecerClave()
  {

  }

}
