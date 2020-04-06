import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { TranslateProvider, CampingProvider } from '../../providers';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  openMenu = false;
  searchQuery = '';
  items: string[];
  showItems = false;
  adults: number;
  children: number;
  campinglocation: string;

  agmStyles: any[] = environment.agmStyles;

  // search conditions
  public checkin = {
    name: this.translate.get('app.pages.home.label.checkin'),
    date: new Date().toISOString()
  };

  public checkout = {
    name: this.translate.get('app.pages.home.label.checkout'),
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()
  };
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    public campings: CampingProvider,    // da sostituire con camping
    ) {
       this.campings = campings.getAll(); // da sostituire con camping
    }
    ionViewWillEnter() {
      this.menuCtrl.enable(true);
    }
    initializeItems() {
      this.items = [
        'mok',
        'mok',
        'mok',
        'mok',
        'mok'
      ];
    }

  itemSelected(item: string) {
    this.campinglocation = item;
    this.showItems = false;
  }

    getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
        this.showItems = true;
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
      } else {
        this.showItems = false;
      }
    }

    async viewCampings() {
      const loader = await this.loadingCtrl.create({
        duration: 2000
      });

      loader.present();
      loader.onWillDismiss().then(() => {
        this.navCtrl.navigateForward('camping-list');
      });
    }

    editprofile() {
      this.navCtrl.navigateForward('edit-profile');
    }

    goToSettings() {
      this.navCtrl.navigateForward('settings');
    }

    goToActivities() {
      this.navCtrl.navigateForward('activities');
    }

    goToRentaCamper() {
      this.navCtrl.navigateForward('rentcamper');
    }
    logout() {
      this.navCtrl.navigateRoot('authentication');
    }

    register() {
      this.navCtrl.navigateForward('authentication');
    }

    messages() {
      this.navCtrl.navigateForward('messages');
    }

}
