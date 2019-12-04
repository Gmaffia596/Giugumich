import { Injectable } from '@angular/core';
import { CAMPERS } from './mock-campers';

@Injectable({
  providedIn: 'root'
})

export class CampersService {
  private campers: any;

  constructor() {
    this.campers = CAMPERS;
  }

  getAll() {
    return this.campers;
  }

  getItem(id) {
    for (let i = 0; i < this.campers.length; i++) {
      if (this.campers[i].id === parseInt(id)) {
        return this.campers[i];
      }
    }
    return null;
  }

  getCamper(campershopID, camperID) {
    let campershop = this.getItem(campershopID);

    for (let i = 0; i < campershop.campers.length; i++) {
        if (campershop.campers[i].id === parseInt(camperID)) {
            return campershop.campers[i];
        }
    }

    return null;
}  

  remove(item) {
    this.campers.splice(this.campers.indexOf(item), 1);
  }
}
