import SubmitBtn from "./Button.js";
import RandomNumberGenerator from "./RandomNumberGenerator.js";

const guessSubmit = document.querySelector(".guessSubmit");
const guessInput = document.querySelector(".guessInput");


class GameMachine {
    constructor(){
        this.button = new SubmitBtn(guessSubmit,guessInput);
    }

    startGame() {
        this.button.setSubmitBtn();
        let randomNumber = RandomNumberGenerator.makeRandomNumber();
        console.log(randomNumber);
        const result = this.button.clickSubmit(randomNumber);
        console.log(result)

    }
}

export default GameMachine;