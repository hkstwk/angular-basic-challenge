import {Component, OnInit, OnDestroy} from '@angular/core';
import {GameService} from "./game-control/game.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  evenNumbers : number[] = [];
  oddNumbers : number[] = [];
  numberSubscription = new Subscription();

  constructor(private gameService: GameService){}

  ngOnInit(): void {
    this.numberSubscription = this.gameService.intervalFired.subscribe(
      (firedNumber: number) => {
        console.log(firedNumber);
        if (firedNumber % 2 === 0){
          this.evenNumbers.push(firedNumber);
        } else {
          this.oddNumbers.push(firedNumber);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.numberSubscription.unsubscribe();
  }
}
