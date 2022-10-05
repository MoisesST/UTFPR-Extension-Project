export class PlayerList {

  constructor() {
    this._players = [];
  }

  getPlayers() {
    return this._players;
  }

  addPlayer(player) {
    this._players.push(player);
  }

  getLength() {
    return this._players.length;
  }
}
