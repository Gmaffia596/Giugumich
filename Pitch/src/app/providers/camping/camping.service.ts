import { Injectable } from '@angular/core';
import { CAMPING } from './mock-camping';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CampingProvider {
    campings: any;
    pitch: any;
    favoriteCounter = 0;
    favorites: Array<any> = [];
    bookingCounter = 0;
    bookings: Array<any> = [];

// da sostituire con la chiamata al servizio per avere i campeggi

    constructor() {
        this.campings = CAMPING;
    }

    getAll() {
        return this.campings;
    }

    getItem(id: number) {
        return this.campings.filter(x => x.id === id)[0];
    }
    getpitch(campingID, pitchID) {
        const camping = this.getItem(campingID);

        for (let i = 0; i < camping.pitches.length; i++) {
            if (camping.pitches[i].id === parseInt(pitchID)) {
                return camping.pitches[i];
            }
        }

        return null;
    }
    remove(item) {
        this.campings.splice(this.campings.indexOf(item), 1);
    }

    /////
    // For Search and Favorites
    ////
    findAll() {
        return Promise.resolve(this.campings);
    }

    findById(id) {
        return Promise.resolve(this.campings[id - 1]);
    }

    findByName(searchKey: string) {
        const key: string = searchKey.toUpperCase();
        return Promise.resolve(this.campings.filter((property: any) =>
            (property.title + ' ' + property.address + ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1));
    }

    getFavorites() {
        return Promise.resolve(this.favorites);
    }

    getBookings() {
        return Promise.resolve(this.bookings);
    }

    favorite(camping) {
        this.favoriteCounter = this.favoriteCounter + 1;
        let exist = false;

        if (this.favorites && this.favorites.length > 0) {
            this.favorites.forEach((val, i) => {
                if (val.camping.id === camping.id) {
                    exist = true;
                }
            });
        }

        if (!exist) {
            this.favorites.push({ id: this.favoriteCounter, camping: camping });
        }

        return Promise.resolve();
    }

    booking(camping) {
        this.bookingCounter = this.bookingCounter + 1;
        let existb = false;

        if (this.bookings && this.bookings.length > 0) {
            this.bookings.forEach((val, i) => {
                if (val.camping.id === camping.id) {
                    existb = true;
                }
            });
        }

        if (!existb) {
            this.bookings.push({ id: this.bookingCounter, camping: camping });
        }

        return Promise.resolve();
    }

    unfavorite(favorite) {
        const index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    }
}
