import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  name: string = '';

  constructor(
    private router: Router,
    public alertController: AlertController,
    private navCtrl: NavController,
    private toastController: ToastController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = sessionStorage.getItem('loggedIn') || 'invitado';
      this.mostrarToast();
    });
  }

  async mostrarToast() {
    if (this.router.url === '/bienvenida') {
      const toast = await this.toastController.create({
        message: `Bienvenido/a ${this.name}!`,
        duration: 1500,
        position: 'top'
      });
      toast.present();
    }
  }
  creditosExpandidos = false;

expandirCreditos() {
  this.creditosExpandidos = !this.creditosExpandidos;
}

  logout() {
    sessionStorage.removeItem('loggedIn');
    this.router.navigateByUrl('/inicio');
  }


  async showAlert(value: string) {
    let headerText, messageText;
    switch (value) {
      case 'first':
        headerText = '¿Cómo entrenar?';
        messageText = 'Es importante comenzar con ejercicios básicos que involucren los grupos musculares principales, los cuales son 7 y aparecerán en el menú de tu izquierda. Es recomendable calentar muy bien el cuerpo antes de empezar con una rutina. Debes considerar aumentar gradualmente la dificultad y la carga de trabajo a medida que el cuerpo se adapta. También es importante tener en cuenta la técnica adecuada al realizar ejercicios para evitar lesiones, mantener una buena hidratación antes, durante y después del ejercicio y escuchar al cuerpo para evitar forzar demasiado el músculo. Es recomendable programar sesiones regulares de entrenamiento, pero también dar al cuerpo tiempo suficiente para recuperarse.';
        break;
      case 'second':
        headerText = '¿Cómo hacer mi rutina?';
        messageText = 'Un EJEMPLO de rutina puede ser que el dia Lunes trabajes brazo que conlleva los grupos musculares bicep , tricep ,hombro . El Martes puedes trabajar lo que es pierna y gluteo y el Miercoles hacer pecho y espalda. De esta forma dejas descansar los grupos musuculares y cumples con el minimo de dia que debes de ejercitarte.';
        break;
      case 'third':
        headerText = 'Recuerda que...';
        messageText = 'Cada que trabajes un grupo muscular debes de dejarlo descansar minimo 24hrs para poder volverlo a entrenar, ya que si no lo dejas descansar no habra progreso muscular.';
        break;
      case 'fourth':
        headerText ='¿Porque hacer ejercicio?'
        messageText ='Hacer actividad física regularmente puede ayudarte a mantener fuertes tus habilidades para pensar, aprender y tener buen juicio con el pasar de los años. También puede reducir tu riesgo de depresión y ansiedad, al igual que ayudarte a dormir mejor y fortalecer huesos y musculos'
        break;
        case 'fifth':
          headerText ='¿Cuantas dias hacer ejercicio si no tengo mucho tiempo?'
          messageText ='De 2 a 3 sesiones de 1 hora por semana son suficientes.  Recuerda que, bajo estas premisas, puedes hacer más siempre que quieras. Es bueno variar los ejercicios para hacer trabajar todo el cuerpo. También, alternar cardio y fortalecimiento.'
        break;
        case 'sixth':
          headerText ='Te recomendamos que...'
          messageText ='Cambiar tu rutina cada vez que tu cuerpo se acostumbre a los ejercicos o incrementar la intensidad de tus entrenamientos.'
        break;
        case 'seventh':
          headerText ='Recuerda que...'
          messageText ='Comer sanamente , esto quiere decir complementar tu ejercicio con comidas mediana-altas en proteina y carbohidratos limpios asi como ingerir verduras y frutas  , consulta un nutriologo para que te aconseje profesionalmente.'
        break;
        case 'eight':
          headerText ='Cardio...'
          messageText ='Se recomienda que además de enfocarse en desarrollar músculos, es importante incluir ejercicio cardiovascular en las sesiones de entrenamiento, ya sea saltar la cuerda durante 10 minutos o dedicar un día adicional a correr, andar en bicicleta u otra actividad cardiovascular preferida'
        break;
        }

    const alert = await this.alertController.create({
      header: headerText,
      message: messageText,
      cssClass: 'alert-message',
      buttons: ['OK']
    });
    alert.cssClass = 'my-custom-class';
  
    await alert.present();
  }
redirectToInstagram() {
  window.open('https://www.instagram.com/the_joel13/');
}
redirectToDiscord() {
  window.open('https://discord.com/users/The_Joel13#6501 ');
}
redirectToMail() {
  window.open('https://mail.google.com/');

function redirectToMail() {
  const destinatario = 'joelbalderrama13@gmail.com';
  const cuerpoMensaje = encodeURIComponent('C-PUMP Exercises');
  
  // Para Outlook
  window.open(`https://outlook.live.com/owa/?to=${destinatario}&body=${cuerpoMensaje}`);
  // Para Yahoo
   window.open(`https://compose.mail.yahoo.com/?to=${destinatario}&body=${cuerpoMensaje}`);
}
}
}