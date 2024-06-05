import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EspaldaPageRoutingModule } from './espalda-routing.module';
import { EspaldaPage } from './espalda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspaldaPageRoutingModule
  ],
  declarations: [EspaldaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // add this line
})
export class EspaldaPageModule {}
