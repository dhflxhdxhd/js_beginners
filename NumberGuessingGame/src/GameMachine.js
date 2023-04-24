import SubmitBtn from "./Button.js";
import RandomNumberGenerator from "./RandomNumberGenerator.js";

const guessSubmit = document.querySelector(".guessSubmit");
const guessInput = document.querySelector(".guessInput");
import {HINT_MESSAGE, ERROR, RESULT, SENTENCE} from "./constant/constant.js";

class GameMachine {
    constructor(){
        this.button = new SubmitBtn(guessSubmit,guessInput);
    }

    startGame() {
        this.button.setSubmitBtn();
        let randomNumber = RandomNumberGenerator.makeRandomNumber();
        console.log("randomNumber",randomNumber);
        this.button.clickSubmit(randomNumber);
    }

    gameOver() {
        console.log(RESULT.FAIL);
        guessSubmit.disabled = true;
        showRestartBtn();
    }

    restart() {
        restartBtn.style.display = "none";
        turn = 0;
        reset();
        this.startGame();
    }


}

export default GameMachine;