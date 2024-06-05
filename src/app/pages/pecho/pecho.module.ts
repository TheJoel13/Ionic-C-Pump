import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PechoPageRoutingModule } from './pecho-routing.module';

import { PechoPage } from './pecho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PechoPageRoutingModule
  ],
  declarations: [PechoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // add this line
})
export class PechoPageModule {}
