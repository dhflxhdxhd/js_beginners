import Judge from "./Judge.js";
import InputView from "./InputView.js";
import {HINT_MESSAGE, ERROR, RESULT, SENTENCE} from "./constant/constant.js";

let turn = 0;

class SubmitBtn{
    constructor(button,guessInput){
        this.button = button;
        this.guessInput = guessInput;
        this.turn;
    }

    setSubmitBtn(){
        this.button.disabled = false;
    }

    checkGuessInput() {
        if (this.guessInput.value < 1 || this.guessInput.value > 100) {
            alert(ERROR.INPUT_RANGE);
            return false;
        }
        return true;
    }
    
    clickSubmit(randomNumber){
        this.button.addEventListener("click", () => {
            console.log("hi")
            let checkResult = this.checkGuessInput();
            if (checkResult) {
                turn++;
                console.log(`turn ${turn}`)
                console.log(checkResult.value)
                
                const userGuess = Number(this.guessInput.value);
                InputView.printGuessInput(userGuess);
                Judge.checkResult(randomNumber,userGuess,turn);
            }
            this.guessInput = ""
        });

    }
    
}

export default SubmitBtn;

