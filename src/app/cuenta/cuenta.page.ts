import { Component, OnInit } from '@angular/core';
import { AccesoService } from '../servicio/acceso.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
  standalone: false,
})
export class CuentaPage implements OnInit {
txt_cedula:string="";
txt_nombre:string="";
txt_apellido:string="";
txt_correo:string="";
txt_clave:string="";
txt_cclave:string="";
mensaje:string="";

  constructor(
    private servicio: AccesoService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  vcedula(){
    let datos={
      accion:'vcedula',
      cedula: this.txt_cedula
    }
    this.servicio.postData(datos).subscribe((res:any)=>{
      if(res.estado){
        this.txt_cedula="";
        this.servicio.showToast(res.mensaje,3000);
      }else{
        this.mensaje="Cedula no encontrada";
      }
    });
  }

  vclave(){
    if(this.txt_clave==this.txt_cclave){
      this.mensaje="Clave correcta";
    }else{
      this.mensaje="Clave incorrecta";
    }
  }

  registrar(){
    if(this.txt_cedula!="" && this.txt_nombre!="" && this.txt_correo!="" && this.txt_clave!=""){
      let datos={
        accion:'cuenta',
        "cedula": this.txt_cedula,
        "nombre": this.txt_nombre,
        "apellido": this.txt_apellido,
        "correo": this.txt_correo,
        "clave": this.txt_clave
      }
      this.servicio.postData(datos).subscribe((res:any)=>{
        if(res.estado){
          this.servicio.showToast(res.mensaje, 3000);
          this.modalCtrl.dismiss();
        }else{
          this.servicio.showToast(res.mensaje, 3000);
        }
      });
    }
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }

}
