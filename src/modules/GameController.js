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
}