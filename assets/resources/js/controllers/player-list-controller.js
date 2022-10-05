import { Player } from "../model/player.js";

export class PlayerListController {

  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddPlayer(this.handleAddPlayer);
  }

  handleAddPlayer = (playerName) => {
    const player = new Player(playerName);
    this.model.addPlayer(player);
    player.setId(this.model.getLength())
    this.view.addARowWithNewDataInTheTable(this.view.createElementsWithData(player._name, player._played, player._score, player._rank));

    console.log(player);
  }
}
