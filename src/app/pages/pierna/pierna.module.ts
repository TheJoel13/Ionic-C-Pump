import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { PiernaPageRoutingModule } from './pierna-routing.module';

import { PiernaPage } from './pierna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiernaPageRoutingModule
  ],
  declarations: [PiernaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // add this line
})
export class PiernaPageModule {}
