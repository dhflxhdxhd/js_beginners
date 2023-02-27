const input = document.querySelector(".guessInput");
const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
const previousGuess = document.querySelector(".previousGuess");
const guessResult = document.querySelector(".guessResult");
const guessHint = document.querySelector(".guessHint");
const minNum = 1;
const maxNum = 100;
let turn = 0;

function makeRandomNumber(){
    return Math.floor(Math.random()*maxNum + minNum);
    // return Math.floor(Math.random * maxNum + minNum);
}

function printGuessInput(userGuess){
    if (turn === 1){
        previousGuess.textContent = "previous Guess : "
    }
    previousGuess.textContent += userGuess + " ";
}

function isSuccess(){
    guessResult.textContent = "Success";
    console.log("success");
    guessSubmit.disabled = true;
}

function isFail(){
    guessResult.textContent = "Game Over";
    console.log("fail");
    guessSubmit.disabled = tru;e
}


function Restart() {
    console.log("restart");
}

function gameOver(){
    console.log("gameOver");
    Restart();
}

function giveHint(){

}

function checkResult(randomNumber){
    console.log("turn:" + turn);
    const userGuess = Number(guessInput.value);
    printGuessInput(userGuess);
    

    console.log(userGuess);
    guessInput.value = ""

    if (userGuess === randomNumber){
        isSuccess();
    }

    if (turn === 10){
        gameOver();
    }

    giveHint();
}

function play(){
    let randomNumber = makeRandomNumber();
    console.log(randomNumber);
    guessSubmit.addEventListener("click", () => {
        turn++;
        checkResult(randomNumber);
    });
}

play();