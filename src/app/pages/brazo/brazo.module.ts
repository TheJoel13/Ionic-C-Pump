import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrazoPageRoutingModule } from './brazo-routing.module';
import { BrazoPage } from './brazo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrazoPageRoutingModule
  ],
  declarations: [BrazoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // add this line
})
export class BrazoPageModule {}
