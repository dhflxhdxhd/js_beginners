const input = document.querySelector(".guessInput");
const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
let previousGuess = document.querySelector(".previousGuess");
let guessResult = document.querySelector(".guessResult");
let guessHint = document.querySelector(".guessHint");
const restartBtn = document.querySelector(".restartBtn");
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
    showRestart();
}

function isFail(){
    guessResult.textContent = "Game Over";
    console.log("fail");
    guessSubmit.disabled = true;
}


function showRestart() {
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
    console.log("gameOver");
    showRestart();
}


function giveHint(randomNumber,userGuess){
    if (randomNumber < userGuess){
        console.log("Number is high");
    }else{
        console.log("Number is low");
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
    }

    if (turn === 10){
        gameOver();
    }

    giveHint(randomNumber,userGuess);
}

function reset(){
    previousGuess.textContent = "";
    guessResult.textContent = "";
    guessHint.textContent = "";
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