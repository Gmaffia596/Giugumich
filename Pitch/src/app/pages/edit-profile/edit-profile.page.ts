import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { TranslateProvider } from '../../providers';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  Logged: boolean;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private translate: TranslateProvider
    ) { }

  ngOnInit() {
    this.Logged = environment.isUserLoggedIn;
  }
  logout() {
    environment.isUserLoggedIn = false;
    this.navCtrl.navigateRoot('home');
  }
  login() {
    environment.isUserLoggedIn = true;
    this.navCtrl.navigateRoot('authentication');
  }
  async sendData() {
    // send booking info
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home');
    });
    // end
  }

}
