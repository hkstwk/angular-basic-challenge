import {Component} from "@angular/core";
import {GameService} from "./game.service";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  startEnabled : boolean = true;
  stopEnabled : boolean = false;

  constructor(private gameService: GameService) { }

  onStartGame(){
    this.startEnabled = !this.startEnabled;
    this.stopEnabled = !this.stopEnabled;
    this.gameService.startGame();
  }

  onStopGame(){
    this.startEnabled = !this.startEnabled;
    this.stopEnabled = !this.stopEnabled;
    this.gameService.stopGame()
  }
}
