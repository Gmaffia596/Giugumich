import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { TranslateProvider } from '../../providers';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    lang: any;
    enableNotifications: boolean;
    paymentMethod: any;
    currency: any;
    enablePromo: boolean;
    enableHistory: boolean;
    languages = [
        {
            id: 'en',
            value: 'English'
        },
        {
            id: 'it',
            value: 'Italian'
        },
    ];
    paymentMethods = [
        {
            id: '1',
            value: 'Paypal'
        },
        {
            id: '2',
            value: 'Credit Card'
        }
    ];
    currencies = [
        {
            id: '1',
            value: 'USD'
        },
        {
            id: '2',
            value: 'BRL'
        },
        {
            id: '3',
            value: 'EUR'
        }
    ];
    Logged: boolean;


    constructor(public navCtrl: NavController, private translate: TranslateProvider, private translateService: TranslateService) { }

    ngOnInit() {
        this.Logged = environment.isUserLoggedIn;
        this.lang = environment.language;
        this.currency = environment.Currency;
        this.paymentMethod = environment.Payment;
        this.enableNotifications = environment.Notification;
        this.enableHistory = environment.History;
        this.enablePromo = environment.Promotion;
    }

    editProfile() {
        this.navCtrl.navigateForward('edit-profile');
    }

    logout() {
        environment.isUserLoggedIn = false;
        this.navCtrl.navigateRoot('home');
    }
    login() {
        environment.isUserLoggedIn = true;
        this.navCtrl.navigateRoot('authentication');
    }

    onChangeLanguage(e) {
        environment.language = (e.detail.value.id as string);
        // console.log(environment.language);
        this.translateService.setDefaultLang(environment.language);
        this.translateService.use(environment.language);
        this.translateService.getTranslation(environment.language).subscribe(translations => {
            this.translate.setTranslations(translations);
        });
    }

    onChangePayment(e) {
        environment.Payment = (e.detail.value.value as string);
        // console.log(environment.Payment);
    }
    onChangeCurrency(e) {
        environment.Currency = (e.detail.value.value as string);
        // console.log(environment.Currency);
    }
    ChangeNotification(e) {
        environment.Notification = e.detail.checked;
        this.enableNotifications = environment.Notification;
       // console.log(this.enableNotifications);
    }

    ChangePromotions(e) {
        environment.Promotion = e.detail.checked;
        this.enablePromo = environment.Promotion;
       // console.log(this.enablePromo);
    }

    ChangeHistory(e) {
        environment.History = e.detail.checked;
        this.enableHistory = environment.History;
       // console.log(this.enableHistory);
    }
}
