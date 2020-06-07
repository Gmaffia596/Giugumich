import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateProvider } from './providers';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  Logged: boolean;
    ngOnInit(): void {
        this.Logged = environment.isUserLoggedIn;
    }

    public appPages: Array<Pages>;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private translate: TranslateProvider,
        private translateService: TranslateService,
        public navCtrl: NavController,
    ) {
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                direct: 'root',
                icon: 'home'
            },
            {
                title: 'Lista Prenotazioni',
                url: '/booking-list',
                direct: 'forward',
                icon: 'book'
            },
            {
                title: 'Preferiti',
                url: '/favorites',
                direct: 'forward',
                icon: 'heart'
            },
            {
                title: 'Noleggia un Camper',
                url: '/rentcamper',
                direct: 'forward',
                icon: 'car'
            },
            {
                title: 'Attività',
                url: '/activities',
                direct: 'forward',
                icon: 'beer'
            },
            {
                title: 'Meteo Locale',
                url: '/local-weather',
                direct: 'forward',
                icon: 'partly-sunny'
            },
            {
                title: 'Impostazioni',
                url: '/settings',
                direct: 'forward',
                icon: 'settings'
            },
            {
                title: 'About',
                url: '/about',
                direct: 'forward',
                icon: 'information-circle-outline'
            },
            {
                title: 'Supporto',
                url: '/support',
                direct: 'forward',
                icon: 'help-buoy'
            }
        ];

        this.initializeApp();
    }

    initializeApp() {
        
      this.platform.ready().then(() => {
          this.statusBar.hide();
          setTimeout(() => {
              this.splashScreen.hide();
          }, 1000);
          // Set language of the app.
          this.translateService.setDefaultLang(environment.language);
          this.translateService.use(environment.language);
          this.translateService.getTranslation(environment.language).subscribe(translations => {
              this.translate.setTranslations(translations);
          });
      }).catch(() => {
          // Set language of the app.
          this.translateService.setDefaultLang(environment.language);
          this.translateService.use(environment.language);
          this.translateService.getTranslation(environment.language).subscribe(translations => {
              this.translate.setTranslations(translations);
          });
      });
  }

  goToEditProgile() {
      this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
      environment.isUserLoggedIn = false;
      this.Logged = environment.isUserLoggedIn;
      this.navCtrl.navigateRoot('/home');
  }

  login() {
      environment.isUserLoggedIn = true;
      this.Logged = environment.isUserLoggedIn;
      this.navCtrl.navigateRoot('/authentication');
  }
}
