class Judge {
    constructor() {}

    checkResult(randomNumber) {
        console.log("turn:" + turn);
        const userGuess = Number(guessInput.value);
        printGuessInput(userGuess);

        console.log(userGuess);
        guessInput.value = ""

        if (userGuess === randomNumber) {
            isSuccess();
        } else if (turn === 10) {
            gameOver();
        } else {
            giveHint(randomNumber, userGuess);
        }

    }

}