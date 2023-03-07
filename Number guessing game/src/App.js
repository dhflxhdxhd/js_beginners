const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
let previousGuess = document.querySelector(".previousGuess");
let guessResult = document.querySelector(".guessResult");
let guessHint = document.querySelector(".guessHint");
const restartBtn = document.querySelector(".restartBtn");




let turn = 0;

import {
    HINT_MESSAGE,
    ERROR,
    RESULT,
    SENTENCE,
} from "./constant/constant.js";
import { RandomNumberGenerator } from "./RandomNumberGenerator.js";
const RandomNum = new RandomNumberGenerator();




class App{
    constructor(){

    }

    startGame(){
        guessSubmit.disabled = false;
        let randomNumber = RandomNum.makeRandomNumber();
        console.log(randomNumber);
        guessSubmit.addEventListener("click", () => {
            if(checkGuessInput()){
                turn++;
                checkResult(randomNumber);  
            }
    
            guessInput.value = "";
        });
    }

    gameOver(){ 
        console.log(RESULT.FAIL);
        guessSubmit.disabled = true;
        showRestartBtn();
    }

    restart(){
        restartBtn.style.display = "none";
        turn = 0; 
        reset();
        this.startGame();
    }

    play(){
        this.startGame();
    }
}

const app = new App();
app.play();





function checkGuessInput(randomNumber) {
    if (guessInput.value < 1 || guessInput.value > 100){
        alert(ERROR.INPUT_RANGE);
        return false;
    } 
    return true;
}



















