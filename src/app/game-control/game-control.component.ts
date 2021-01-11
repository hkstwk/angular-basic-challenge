import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() intervalFired = new EventEmitter<number>();
  incrementingNumber : number = 0;
  interval;
  startEnabled : boolean = true;
  stopEnabled : boolean = false;

  constructor() { }

  onStartGame(){
    this.startEnabled = !this.startEnabled;
    this.stopEnabled = !this.stopEnabled;
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.incrementingNumber++);
    }, 1000);
  }

  onStopGame(){
    this.startEnabled = !this.startEnabled;
    this.stopEnabled = !this.stopEnabled;
    clearInterval(this.interval);
  }
}
