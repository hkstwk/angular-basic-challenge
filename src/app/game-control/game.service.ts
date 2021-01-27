import {Subject} from 'rxjs';
import {Injectable, OnDestroy} from '@angular/core';

@Injectable({providedIn: 'root'})
export class GameService implements OnDestroy {
  intervalFired: Subject<number> = new Subject<number>();

  incrementingNumber: number = 0;
  interval;

  startGame(){
    this.interval = setInterval(() => {
      this.intervalFired.next(this.incrementingNumber++);
    }, 1000);
  }

  stopGame(){
    clearInterval(this.interval);
  }

  ngOnDestroy(): void {
    this.intervalFired.complete();
  }
}
