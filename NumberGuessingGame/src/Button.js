import Judge from "./Judge.js";


let turn = 0;

class SubmitBtn{
    constructor(button,guessInput){
        this.button = button;
        this.guessInput = guessInput;
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
        let JudgeResult = ""
        this.button.addEventListener("click", () => {
            let checkResult = this.checkGuessInput();
            if (checkResult) {
                turn++;
                console.log(`turn ${turn}`)
                JudgeResult = Judge.checkResult(randomNumber,this.guessInput,turn);
            }
            this.guessInput.value = ""
            return JudgeResult;
        });
    }
    
}

export default SubmitBtn;

