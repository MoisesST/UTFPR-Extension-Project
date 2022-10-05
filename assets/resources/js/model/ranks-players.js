export class RanksPlayers {

  static byScore(players) {
    players.sort((a, b) => {
      if (a.getScore() > b.getScore()) {
        return - 1;
      }
      return true;
    });
  }
}
