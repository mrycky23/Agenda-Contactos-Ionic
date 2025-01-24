import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoTokenPage } from './ingreso-token.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoTokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoTokenPageRoutingModule {}
