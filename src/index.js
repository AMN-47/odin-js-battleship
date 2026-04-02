import './styles/styles.css';
import GameController from './modules/GameController.js';
import { renderBoards } from './dom/render.js';

const game = GameController();
renderBoards(game);