import Ship from './Ship.js';

export default class Gameboard {
  constructor() {
    this.board = {}; // "x,y" => ship
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(x, y, length, isHorizontal = true) {
    const ship = new Ship(length);

    for (let i = 0; i < length; i++) {
      const pos = isHorizontal
        ? `${x + i},${y}`
        : `${x},${y + i}`;

      this.board[pos] = ship;
    }

    this.ships.push(ship);
  }

  receiveAttack(x, y) {
    const key = `${x},${y}`;

    if (this.board[key]) {
      const ship = this.board[key];
      ship.hit(key);
      return 'hit';
    } else {
      if (!this.missedAttacks.includes(key)) {
        this.missedAttacks.push(key);
      }
      return 'miss';
    }
  }

  allShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }
}