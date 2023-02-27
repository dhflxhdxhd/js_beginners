const input = document.querySelector(".guessInput");
const guessInput = document.querySelector(".guessInput");
const guessSubmit = document.querySelector(".guessSubmit");
const minNum = 1;
const maxNum = 100;
let turn = 0;

function makeRandomNumber(){
    return Math.floor(Math.random()*maxNum + minNum);
    // return Math.floor(Math.random * maxNum + minNum);
}

function printGuessInput(){
    
}

function isSuccess(){
    console.log("success");
}

function isFail(){
    // console.log("fail");
}

function checkResult(randomNumber){
    printGuessInput();
    const userGuess = Number(guessInput.value);

    if (randomNumber === userGuess){
        isSuccess();
    }else {
        isFail();
    }

}

function play(){
    const randomNumber = makeRandomNumber();
    console.log(randomNumber);
    guessSubmit.addEventListener("click",checkResult(randomNumber));
}

play();