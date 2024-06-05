import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HombroPage } from './hombro.page';

const routes: Routes = [
  {
    path: '',
    component: HombroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HombroPageRoutingModule {}
