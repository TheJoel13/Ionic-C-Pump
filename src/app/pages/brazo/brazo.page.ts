import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-brazo',
  templateUrl: './brazo.page.html',
  styleUrls: ['./brazo.page.scss'],
})
export class BrazoPage implements OnInit {

  
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Recuerda!',
      message: ' calentar y estirar de manera adecuada el cuerpo y el grupo muscular que vas a entrenar.',
      buttons: ['OK']
    });
  
  
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