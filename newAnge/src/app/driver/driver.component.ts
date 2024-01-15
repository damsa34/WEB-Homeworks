import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../module/klasa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit {
  constructor() {}
  @Input()
  ime:String = "";

  @Input()
  igrac:Player = {} as Player;

  @Input()
  reden:Number = 0;

  @Output()
  coach: Player = {} as Player;

  cuci = new EventEmitter<any>();

  ngOnInit(): void {}

  stilovi() {
    return {
    'background-color': this.igrac.allStar >= 6 ? 'purple' : 'darkblue',
    'border-radius': this.igrac.id % 2 == 0 ? '500px' : '200px',
    'color': this.igrac.points >= 15000 ? 'gold' : 'gray',
    'font-weight': this.igrac.rebounds >= 10000 ? 'bold' : 'bolder',
    'text-decoration': this.igrac.assists >= 8000 ? 'underline' : 'none'
    };
  }

  klik() {
    var link = this.igrac.iconUrl
    window.open(link)
    console.log("Me klikna")
    this.cuci.emit(this.igrac)
  }
}
