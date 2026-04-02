export function renderBoards(game) {
  const container = document.getElementById('game');
  container.innerHTML = '';

  const playerBoard = createBoard(game.player.board, false);
  const enemyBoard = createBoard(game.computer.board, true, game);

  container.appendChild(playerBoard);
  container.appendChild(enemyBoard);
}

function createBoard(board, isEnemy = false, game = null) {
  const boardEl = document.createElement('div');
  boardEl.classList.add('board');

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');

      const key = `${x},${y}`;
      const ship = board.board[key];

      // Show ships only on player board
      if (!isEnemy && ship) {
        cell.classList.add('ship');
      }

      // Miss
      if (board.missedAttacks.includes(key)) {
        cell.classList.add('miss');
      }

      // Hit
      if (ship && ship.hitPositions.has(key)) {
        cell.classList.add('hit');
      }

      if (isEnemy && game) {
        cell.addEventListener('click', () => {
          game.playerAttack(x, y);
          renderBoards(game);
        });
      }

      boardEl.appendChild(cell);
    }
  }

  return boardEl;
}