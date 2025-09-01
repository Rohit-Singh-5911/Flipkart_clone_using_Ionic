import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileePage } from './mobilee.page';

const routes: Routes = [
  {
    path: '',
    component: MobileePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileePageRoutingModule {}
