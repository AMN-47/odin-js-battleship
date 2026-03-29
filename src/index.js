import './styles/styles';
import GameController from './modules/GameController'
import {renderBoards} from './dom/render'

const game = GameController();

renderBoards(game);