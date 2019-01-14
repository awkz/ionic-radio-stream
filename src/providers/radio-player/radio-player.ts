import { Injectable } from '@angular/core';

/*
  Generated class for the RadioPlayerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RadioPlayerProvider {
  url: string;
  stream: any;
  promise: any;

  constructor() {

    this.url = "http://182.253.108.26:9999/radiodesa.mp3";
    this.stream = new Audio(this.url);

  }

  play() {
    this.stream.play();
    this.promise = new Promise((resolve, reject) => {
      this.stream.addEventListener('playing', () => {
        resolve(true);
      });

      this.stream.addEventListener('error', () => {
        reject(false);
      });
    });

    return this.promise;


  };

  pause() {
    this.stream.pause();
  };

  getStatus() {
    return this.stream.playing==true ? 'connected' : 'disconect';
  }

}
