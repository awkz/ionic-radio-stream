import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RadioPlayerProvider } from '../../providers/radio-player/radio-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public status: any = 'disconnect';
  player: any;

  constructor(public navCtrl: NavController, player: RadioPlayerProvider) {
    this.player = player
  }

  play() {
    this.status = 'connecting';
    this.player.play().then(() => {
      this.status = 'connected';
      console.log('Playing');
    });
    
  }

  pause() {
    this.player.pause();
    this.status = 'paused';
  }

}
