import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoTokenPageRoutingModule } from './ingreso-token-routing.module';

import { IngresoTokenPage } from './ingreso-token.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoTokenPageRoutingModule
  ],
  declarations: [IngresoTokenPage]
})
export class IngresoTokenPageModule {}
