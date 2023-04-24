
let previousGuess = document.querySelector(".previousGuess");
let guessResult = document.querySelector(".guessResult");
let guessHint = document.querySelector(".guessHint");
const restartBtn = document.querySelector(".restartBtn");

import {HINT_MESSAGE, ERROR, RESULT, SENTENCE} from "./constant/constant.js";


import GameMachine from "./GameMachine.js";

class App {

    play() {
        const gameMachine = new GameMachine();
        gameMachine.startGame();
    }
}

const app = new App();
app.play();

