import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { Player } from './module/klasa';
import { PLAYERS } from '../db-data';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DriverComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'newAnge';
  players = PLAYERS;

  klasi(igrac: Player) {
    return {
      'bucket': igrac.points >= 20000,
      'glass-cleaner': igrac.rebounds >= 9000,
      'magic-of-oz': igrac.assists >= 5000
    };
  }

  appKlik(suzi : Player) {
    console.log(suzi.name)
  }
}
