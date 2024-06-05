import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'; // Importar el servicio 
import { ToastController } from '@ionic/angular';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';


interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [];

  constructor(
    private alertController: AlertController,
    private router: Router,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Bienvenido, ingresa tu nombre',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
          name: 'username',
          type: 'text'
        },
      ],
    });
    await alert.present();
  
    const { data } = await alert.onDidDismiss();
  
    if (data && data.values && data.values.username) {
      // Guardar el nombre de usuario en sessionStorage
      sessionStorage.setItem('loggedIn', data.values.username);
      // Si se ingresó un nombre de usuario, redirigimos a la página de bienvenida
      this.router.navigateByUrl('/bienvenida', { state: { name: data.values.username } });
    } else {
      // Si no se ingresó un nombre de usuario, mostramos una alerta indicando que es necesario ingresar uno
      const errorAlert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingresa un nombre de usuario',
        buttons: ['OK'],
      });
      await errorAlert.present();
    }
  }

  ngOnInit() {
    window.addEventListener("beforeunload", (event) => {
      // Si la plataforma no es nativa (es decir, si se está ejecutando en una computadora),
      // se cierra la ventana cuando se presiona el botón de cerrar
      if (!Capacitor.isNativePlatform) {
        event.preventDefault();
        event.returnValue = '';
        window.close();
      }
    });
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Informacion Sobre la app',
      message: ' Esta aplicacion fue creada con fines de ayudar en base a experiencia propia te sugerimos si quieres llevar un entrenamiento mas optimo acudir a profesionales , no nos hacemos responsable por lesiones u o cualquier otra circunstancia provocada por la app a personas ajenas.',
      buttons: ['OK']
    });
  
    await alert.present();
  } 
}  
