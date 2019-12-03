import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, CampingProvider } from '../../providers';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.page.html',
  styleUrls: ['./booking-list.page.scss'],
})

export class BookingListPage implements OnInit {
  bookings: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public campings: CampingProvider
  ) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this.campings.getBookings()
      .then(data => { this.bookings = data; });
  }

}
