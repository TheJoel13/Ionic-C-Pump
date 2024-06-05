import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioPageModule } from './pages/inicio/inicio.module';
import { BienvenidaPageModule } from './pages/bienvenida/bienvenida.module'; // Agrega la importación del módulo de la página de bienvenida

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, InicioPageModule, BienvenidaPageModule], // Agrega el módulo de la página de bienvenida
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
