function createBoard(board, isEnemy = false, game = null) {
    const boardEl = document.createElement('div');
    boardEl.classList.add('board');

    for (let y =0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            const key = `${x}, ${y}`;
            const board = board.board[key];

            //Shows ships only on player board
            if (!isEnemy && ship) {
                cell.classList.add('ship');
            }

            //Misses
            if (board.missedAttacks.includes(key)) {
                cell.classList.add('miss');
            }

            //If it hits
            if (ship && ship.hits > 0) {
                cell.classList.add('hit');
            }

            //click handler
            if (isEnemy && game) {
                cell.addEventListener('click' , ()=> {
                    game.playerAttack(x, y);
                    renderBoards(game);
                });
            }

            boardEl.appendChild(cell);
        }
    }

    return boardEl;
}