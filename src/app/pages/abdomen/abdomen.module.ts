import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AbdomenPageRoutingModule } from './abdomen-routing.module';

import { AbdomenPage } from './abdomen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbdomenPageRoutingModule
  ],
  declarations: [AbdomenPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // add this line
})
export class AbdomenPageModule {}
