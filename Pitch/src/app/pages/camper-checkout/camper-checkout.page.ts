import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { TranslateProvider, CampersService } from '../../providers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camper-checkout',
  templateUrl: './camper-checkout.page.html',
  styleUrls: ['./camper-checkout.page.scss'],
})
export class CamperCheckoutPage implements OnInit {
  campershop: any;
  campershopID: String;
  camper: any;
  camperID: any;
  paymethods: String = 'creditcard';
  // number of nights
  public days = 3;
  // date from
  public dateFrom = new Date();
  // date to
  public dateTo = new Date();

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    private route: ActivatedRoute,
    public campers: CampersService
  ) {
    this.campershopID = this.route.snapshot.paramMap.get('campershopID');
    this.camperID = this.route.snapshot.paramMap.get('camperID');
    this.campershop = this.campers.getItem(this.campershopID);
    this.camper = this.campers.getCamper(this.campershopID, this.camperID);
  }

  ngOnInit() {
  }
  /*
  *
  *
  *
  *
  */
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
        message: 'your Camper was successfuly Rent!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();

      setTimeout(() => {
        loader.dismiss();
        toast.present();
        // back to home page
        this.navCtrl.navigateForward('/home');
      }, 3000);
    });
    // end
  }
}
