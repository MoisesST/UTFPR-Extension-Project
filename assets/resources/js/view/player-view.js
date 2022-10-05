export class PlayerView {

  constructor() {
    this._input = document.querySelector(".player-name-entry");
    this._addPlayerBtn = document.querySelector(".add-player-btn");
    this._diceRollBtn = document.querySelector(".roll-dice-btn");
    this._playerNameTD = document.querySelector(".player-name");
    this._totalPlayedTD = document.querySelector(".total-played");
    this._playerScoreTD = document.querySelector(".player-score");
    this._playerRankTD = document.querySelector(".player-rank");
  }

  // getInput() {
  //   return this._input;
  // }

  // getAddBtn() {
  //   return this._addPlayerBtn;
  // }

  // getRollBtn() {
  //   return this._diceRollBtn;
  // }

  setPlayerNameTD(data) {
    this._playerNameTD.innerHTML = data;
  }

  setTotalPlayedTD(data) {
    this._totalPlayedTD.innerHTML = data;
  }

  setPlayerScoreTD(data) {
    this._playerScoreTD.innerHTML = data;
  }

  setPlayerRankTD(data) {
    this._playerRankTD.innerHTML = data;
  }

  createElementsWithData(player, played, score, rank) {
    return `
      <tr class="user-data titles">
        <td class="player-name column user-data-column">${player}</td>
        <td class="total-played column user-data-column">${played}</td>
        <td class="player-score column user-data-column">${score}</td>
        <td class="player-rank column user-data-column">${rank}°</td>
      </tr>
      `;
  }

  addARowWithNewDataInTheTable(data) {
    const ass = document.querySelector(".table-body");
    ass.innerHTML += data;
  }

  changeImageToGif() {
    const img = document.querySelector(".dice-img");
    img.src =
      "https://media1.giphy.com/media/taDxtc7by09TZ03ciP/giphy.gif?cid=ecf05e471gmtyspb9auv1bhtavsts1vwevs5nkwkk1tashcq&rid=giphy.gif&ct=g";
  }

  bindAddPlayer(handler) {

    let playerCounter = 0;

    this._addPlayerBtn.addEventListener('click', () => {

      if (this._nameGivenByPlayer()) {
        if (this._nameGivenByPlayer().length <= 4) {

          playerCounter++;

          if (playerCounter <= 6) {
            handler(this._nameGivenByPlayer());
          }
          else {
            alert("Reached the player limit, wait for the next game!");
          }
        }
        else {
          alert("Player name can only have 4 characters!");
        }
        this._resetInput();
      }
    });
  }

  _nameGivenByPlayer() {
    return this._input.value;
  }

  _resetInput() {
    this._input.value = '';
  }
}
