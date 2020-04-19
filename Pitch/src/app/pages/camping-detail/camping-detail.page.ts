import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, ToastController, ModalController } from '@ionic/angular';
import { TranslateProvider, CampingProvider } from '../../providers';
import { ActivatedRoute, Router } from '@angular/router';

import { ImagePage } from '../modal/image/image.page';
import { CampingCheckoutPage } from '../camping-checkout/camping-checkout.page';

import { environment } from '../../../environments/environment';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-camping-detail',
  templateUrl: './camping-detail.page.html',
  styleUrls: ['./camping-detail.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class CampingDetailPage implements OnInit {
  camping: any;
  campingID: any = this.route.snapshot.paramMap.get('id');
  agmStyles: any[] = environment.agmStyles;
  campingSegment = 'details';

  constructor(
    public navCtrl: NavController,
    public asCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    private translate: TranslateProvider,
    public campings: CampingProvider,
    public route: ActivatedRoute,
    public router: Router
  ) {
    console.log(this.campings);
    this.camping = this.campings.getItem(+this.campingID);
    console.log(this.camping);
    
    
  }

  ngOnInit() {
    console.log(this.camping);
  }

  checkout(campingID: number, pitchID: number) {
    this.navCtrl.navigateForward(`camping-checkout/${campingID}/${pitchID}`);
    // this.router.navigate(['../../camping-checkout', { campingID: campingID, pitchID: pitchID }], { relativeTo: this.route });
    // return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async favorite(camping) {

    this.campings.favorite(camping)
      .then(async property => {
        const toast = await this.toastCtrl.create({
          showCloseButton: true,
          message: 'Camping added on Favorites list.',
          duration: 2000,
          position: 'bottom'
        });

        toast.present();
      });
  }

  async share() {
    const actionSheet = await this.asCtrl.create({
      header: 'Share Camping:',
      buttons: [{
        text: 'Facebook',
        role: 'facebook',
        icon: 'logo-facebook',
        handler: () => {
          console.log('Facebook clicked');
        }
      }, {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Twitter clicked');
        }
      }, {
        text: 'Google+',
        icon: 'logo-googleplus',
        handler: () => {
          console.log('Google+ clicked');
        }
      }, {
        text: 'Instagram',
        icon: 'logo-instagram',
        handler: () => {
          console.log('Instagram clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  range(n) {
    return new Array(n);
  }

  avgRating() {
    let average = 0;

    this.camping.reviews.forEach((val: any, key: any) => {
      average += val.rating;
    });

    return average / this.camping.reviews.length;
  }

}
