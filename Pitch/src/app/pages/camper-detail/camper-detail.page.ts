import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateProvider, CampersService } from '../../providers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-camper-detail',
  templateUrl: './camper-detail.page.html',
  styleUrls: ['./camper-detail.page.scss'],
})
export class CamperDetailPage implements OnInit {
  campershop: any;
  camperID: any = this.route.snapshot.paramMap.get('id');
  // camperSegment: string = 'details';

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private translate: TranslateProvider,
    public campers: CampersService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.campershop = this.campers.getItem(this.camperID);
  }

  checkout(campershopID: number, camperID: number) {
    this.navCtrl.navigateForward(`camper-checkout/${campershopID}/${camperID}`);
  }

}
