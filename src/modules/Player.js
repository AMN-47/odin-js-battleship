import Gameboard from './Gameboard.js';

export default class Player {
  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.board = new Gameboard();
    this.previousMoves = new Set();
  }

  attack(enemyBoard, x, y) {
    return enemyBoard.receiveAttack(x, y);
  }

  randomMove() {
    let x, y, key;

    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      key = `${x},${y}`;
    } while (this.previousMoves.has(key));

    this.previousMoves.add(key);
    return { x, y };
  }
}