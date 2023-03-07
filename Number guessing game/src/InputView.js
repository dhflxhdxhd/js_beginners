
class InputView {
    constructor(){

    }
    isSuccess(){
        guessResult.textContent = RESULT.SUCCESS;
        console.log(RESULT.SUCCESS);
        guessSubmit.disabled = true;
        showRestartBtn();
    }
    
    isFail(){
        guessResult.textContent = RESULT.FAIL;
        console.log(RESULT.FAIL);
        guessSubmit.disabled = true;
    }

    printGuessInput(userGuess){
        if (turn === 1){
            previousGuess.textContent = SENTENCE.PREVIOUS_GUESS;
        }
        previousGuess.textContent += userGuess + " ";
    }

    showRestartBtn() {
        guessHint.textContent = "";
        restartBtn.style.display = "block";
        console.log("restart");
        restartBtn.addEventListener("click",restart);
    }

    giveHint(randomNumber,userGuess){
        if (randomNumber < userGuess){
            guessHint.textContent = HINT_MESSAGE.HIGH;
            console.log(HINT_MESSAGE.HIGH);
        }else{
            guessHint.textContent = HINT_MESSAGE.LOW;
            console.log(HINT_MESSAGE.LOW);
        }
    }

    reset(){
        previousGuess.textContent = "";
        guessResult.textContent = "";
        guessHint.textContent = "";
    }
}