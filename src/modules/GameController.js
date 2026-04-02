import Player from './Player.js';

export default function GameController() {
  const player = new Player();
  const computer = new Player(true);

  let gameOver = false;

  function setupGame() {
    // Player ships
    player.board.placeShip(0, 0, 3);
    player.board.placeShip(2, 3, 2);

    // Computer ships
    computer.board.placeShip(1, 1, 3);
    computer.board.placeShip(5, 5, 2);
  }

  function playerAttack(x, y) {
    if (gameOver) return;

    const result = player.attack(computer.board, x, y);

    if (computer.board.allShipsSunk()) {
      gameOver = true;
      return { result, winner: 'player' };
    }

    // Computer turn
    const { x: cx, y: cy } = computer.randomMove();
    computer.attack(player.board, cx, cy);

    if (player.board.allShipsSunk()) {
      gameOver = true;
      return { result, winner: 'computer' };
    }

    return { result };
  }

  setupGame();

  return {
    player,
    computer,
    playerAttack,
  };
}