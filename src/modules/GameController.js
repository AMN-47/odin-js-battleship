import Player from './Player.js';

export default function GameController() {
    const player = new Player();
    const computer = new Player(True); 

    let gameOver = false;

    //Temp: Preset Ships
    function setupGame() {
        player.board.placeShip(0, 0, 3);
        player.board.placeShip(2, 2, 2);

        computer.board.placeShip(1, 1, 3);
        computer.board.placeShip(4, 4, 2);
    }

    function playerAttack(x, y) {
        if (gameOver) return;

        const result = player.attack(computer.board, x, y);

        if (computer.board.allShipsSunk()) {
            gameOver = true;
            return {result, winner: 'player'};
        }

        //Computer Turn
        const {x: cx, y: cy} = computer.randomMove();
        computer.attack(player.board, cx, cy);

        if (player.board.allShipsSunk()) {
            gameOver = true;
            return {result, winner: 'computer'};
        }
        return {result};
    }

    setupGame();

    return {
        player,
        computer,
        playerAttack,
    };
}