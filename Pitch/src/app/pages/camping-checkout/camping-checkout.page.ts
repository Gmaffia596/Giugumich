import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { TranslateProvider, CampingProvider } from '../../providers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camping-checkout',
  templateUrl: './camping-checkout.page.html',
  styleUrls: ['./camping-checkout.page.scss'],
})
export class CampingCheckoutPage implements OnInit {
  camping: any;
  campingID: string;
  room: any;
  roomID: any;
  paymethods: string = 'creditcard';
  // number of nights
  public nights = 7;
  // number of guests
  public guests = 3;
  // date from
  public dateFrom = new Date();
  // date to
  public dateTo = new Date();

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
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    private route: ActivatedRoute,
    public campings: CampingProvider
  ) {
   this.campingID = this.route.snapshot.paramMap.get('campingID');
   this.roomID = this.route.snapshot.paramMap.get('roomID');
   this.camping = this.campings.getItem(this.campingID);
   this.room = this.campings.getRoom(this.campingID, this.roomID)
  }

  ngOnInit() {
    console.log(this.room);
  }

  async makeBooking() {
    // send booking info
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: false,
        cssClass: 'bg-profile',
        message: 'your booking was successful!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();

      this.campings.booking(this.camping)
      .then(response => {
        setTimeout(() => {
          loader.dismiss();
          toast.present();
          // back to home page
          this.navCtrl.navigateForward('/home');
        }, 3000)
      });
    });
    // end
  }

}
