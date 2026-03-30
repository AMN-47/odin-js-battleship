export function renderBoards(game) {
    const container = document.getElementById('game');
    container.innerHTML = '';

    const playerBoard = document.createElement('div');
    playerBoard.textContent = 'Player Board';

    const enemyBoard = document.createElement('div');
    enemyBoard.textContent = 'Enemy Board';

    container.appendChild(playerBoard);
    container.appendChild(enemyBoard);
}