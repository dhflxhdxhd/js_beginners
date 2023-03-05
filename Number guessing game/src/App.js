const input = document.querySelector(".guessInput");
const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
let previousGuess = document.querySelector(".previousGuess");
let guessResult = document.querySelector(".guessResult");
let guessHint = document.querySelector(".guessHint");
const restartBtn = document.querySelector(".restartBtn");

const {
    HINT_MESSAGE,
    ERROR,
    RESULT,
    SENTENCE,
} = require("./constant/constant.js");


let turn = 0;


const RandomNumberGenerator = require("./RandomNumberGenerator.js")


class App{
    constructor(){

    }

    play(){
        guessSubmit.disabled = false;
        let randomNumber = RandomNumberGenerator.makeRandomNumber();
        console.log(randomNumber);
        guessSubmit.addEventListener("click", () => {
            if(checkGuessInput()){
                turn++;
                checkResult(randomNumber);  
            }
    
            guessInput.value = "";
        });
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



function printGuessInput(userGuess){
    if (turn === 1){
        previousGuess.textContent = SENTENCE.PREVIOUS_GUESS;
    }
    previousGuess.textContent += userGuess + " ";
}

function isSuccess(){
    guessResult.textContent = RESULT.SUCCESS;
    console.log(RESULT.SUCCESS);
    guessSubmit.disabled = true;
    showRestartBtn();
}

function isFail(){
    guessResult.textContent = RESULT.FAIL;
    console.log(RESULT.FAIL);
    guessSubmit.disabled = true;
}


function showRestartBtn() {
    guessHint.textContent = "";
    restartBtn.style.display = "block";
    console.log("restart");
    restartBtn.addEventListener("click",restart);
}

function restart(){
    restartBtn.style.display = "none";
    turn = 0; 
    reset();
    play();
}

function gameOver(){ 
    console.log(RESULT.FAIL);
    guessSubmit.disabled = true;
    showRestartBtn();
}


function giveHint(randomNumber,userGuess){
    if (randomNumber < userGuess){
        guessHint.textContent = HINT_MESSAGE.HIGH;
        console.log(HINT_MESSAGE.HIGH);
    }else{
        guessHint.textContent = HINT_MESSAGE.LOW;
        console.log(HINT_MESSAGE.LOW);
    }

}

function checkResult(randomNumber){
    console.log("turn:" + turn);
    const userGuess = Number(guessInput.value);
    printGuessInput(userGuess);
    

    console.log(userGuess);
    guessInput.value = ""

    if (userGuess === randomNumber){
        isSuccess();
    }else if(turn === 10){
        gameOver();
    }else{
        giveHint(randomNumber,userGuess);
    }

}

function reset(){
    previousGuess.textContent = "";
    guessResult.textContent = "";
    guessHint.textContent = "";
}



play();