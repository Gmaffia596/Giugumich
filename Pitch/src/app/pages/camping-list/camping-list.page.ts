import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, CampingProvider } from '../../providers';

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
  selector: 'app-camping-list',
  templateUrl: './camping-list.page.html',
  styleUrls: ['./camping-list.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class CampingListPage implements OnInit {
  campingLists: String = 'cardlist';
  agmStyles: any[] = environment.agmStyles;
  campings: any;

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public campingService: CampingProvider
  ) {
    this.campings = this.campingService.getAll();
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
