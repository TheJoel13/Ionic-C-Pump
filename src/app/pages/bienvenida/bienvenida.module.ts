import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BienvenidaPageRoutingModule } from './bienvenida-routing.module';

import { BienvenidaPage } from './bienvenida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidaPageRoutingModule,
  ],
  declarations: [BienvenidaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // add this line
})
export class BienvenidaPageModule {}
