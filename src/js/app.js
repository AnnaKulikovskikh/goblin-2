import '../css/style.css';
import Game from './gameC.js';

const game = new Game(1000);
game.fieldCreate(4);
game.imgCreate();