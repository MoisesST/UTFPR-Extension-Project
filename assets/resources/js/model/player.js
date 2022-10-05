import { RollDice } from "./roll-dice.js";

export class Player {

  constructor(playerName) {
    this._id = 0;
    this._name = playerName;
    this._played = 0;
    this._score = 0;
    this._rank = 0;
  }

  getId() {
    return this._id;
  }

  setId(id) {
    this._id = id;
  }

  getName() {
    return this._name;
  }

  getPlayed() {
    return this._played;
  }

  setPlayed(played) {
    this._played = played;
  }

  getScore() {
    return this._score;
  }

  setScore(score) {
    this._score = score;
  }

  getRank() {
    return this._rank;
  }

  setRank(rank) {
    this._rank = rank;
  }

  rollDice() {
    this._played++;
    return RollDice.result();
  }
}
