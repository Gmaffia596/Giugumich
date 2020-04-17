import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const Pusher: any;


@Injectable({
  providedIn: 'root'
})
export class PusherService {
  public _pusher: any;

  constructor(public http: HttpClient) {
    this._pusher = new Pusher('cf37c0b3aad5fe9bc413', {
      cluster: 'eu',
      encrypted: true
    });
  }


  public getPusher() {
    return this._pusher;
  }
}
