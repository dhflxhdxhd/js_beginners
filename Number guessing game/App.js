const input = document.querySelector(".guessInput");
const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
const minNum = 1;
const maxNum = 100;
let turn = 0;

function makeRandomNumber(){
    return Math.floor(Math.random * maxNum + minNum);
}

function printGuessInput(){
    const userGuess = Number(guessInput.value);
    checkResult(userGuess);
}

function checkResult(userGuess){

}

function play(){
    let randomNumber = makeRandomNumber();
    guessSubmit.addEventListener("click",printGuessInput);
}

play();