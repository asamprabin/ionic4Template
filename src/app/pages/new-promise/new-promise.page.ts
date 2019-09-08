import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-promise',
  templateUrl: './new-promise.page.html',
  styleUrls: ['./new-promise.page.scss'],
})
export class NewPromisePage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  publishPromise() {
    this.alertCtrl.create({
      header: 'Are you Sure',
      message: 'Do you want to publish',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {

          }
        }
      ],
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
