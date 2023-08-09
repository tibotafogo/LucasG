import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { FilmeService } from '../service/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public filmeService: FilmeService
  ) {}

  async presentAlertPromptAdd() {
    const alert = await this.alertController.create({
      header: 'Adicionar filmes',
      inputs: [
        {
          name: 'filmes',
          type: 'text',
          placeholder: 'Filmes',
        },
        {
          name: 'date',
          type: 'date',
          min: '2023-01-01',
          max: '2025-12-31',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: (alertData) => {
            if (alertData.filmes != '') {
              this.filmeService.addFilmes(alertData.filmes, alertData.date);
            } else {
              this.presentToast();
              this.presentAlertPromptAdd();
            }
          },
        },
      ],
    });

    await alert.present();
  }
  presentToast() {
    throw new Error('Method not implemented.');
  }
}
