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
    
}

function isSuccess(){
    
}

function isFail(){

}

function checkResult(randomNumber){
    printGuessInput();
    const userGuess = Number(guessInput.value);
    randomNumber === userGuess ? isSuccess : isFail
}

function play(){
    let randomNumber = makeRandomNumber();
    guessSubmit.addEventListener("click",checkResult(randomNumber));
}

play();