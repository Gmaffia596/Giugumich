import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { TranslateProvider} from '../../providers';

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
  rooms: any;
  adults: any;

  childs: any = 0;
  children: number;
  hotellocation: string;

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
    ) {}

}
