export function renderBoards(game) {
  const container = document.getElementById('game');
  container.innerHTML = '';

  const playerBoardEl = createBoard(game.player.board, false);
  const enemyBoardEl = createBoard(game.computer.board, true, game);

  container.appendChild(playerBoardEl);
  container.appendChild(enemyBoardEl);
}