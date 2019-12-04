import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, CampersService } from '../../providers';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-campers-list',
  templateUrl: './campers-list.page.html',
  styleUrls: ['./campers-list.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class CampersListPage implements OnInit {
  shops: any;
  numDays: number = 3;

  constructor(
    public navCtrl: NavController, 
    public campersService: CampersService,
    private translate: TranslateProvider
  ) { }

  ngOnInit() {
    this.shops = this.campersService.getAll();
  }

}
