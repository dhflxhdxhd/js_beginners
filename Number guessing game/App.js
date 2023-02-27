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

function checkGuessInput(randomNumber) {
    if (guessInput.value < 1 || guessInput.value > 100){
        alert("1이상 100이하의 수를 입력하세요.");
        return false;
    } 
    return true;
}

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
    showRestartBtn();
}

function isFail(){
    guessResult.textContent = "Game Over";
    console.log("fail");
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
    console.log("gameOver");
    guessSubmit.disabled = true;
    showRestartBtn();
}


function giveHint(randomNumber,userGuess){
    if (randomNumber < userGuess){
        guessHint.textContent = "Number is high";
        console.log("Number is high");
    }else{
        guessHint.textContent = "Number is low";
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

function play(){
    guessSubmit.disabled = false;
    let randomNumber = makeRandomNumber();
    console.log(randomNumber);
    guessSubmit.addEventListener("click", () => {
        if(checkGuessInput()){
            turn++;
            checkResult(randomNumber);  
        }
    });
}

play();