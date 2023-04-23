const Judge = {
    checkResult(randomNumber,guessInput,turn) {
        const userGuess = Number(guessInput.value);
        // printGuessInput(userGuess);

        console.log(userGuess);

        if (userGuess === randomNumber) {
            return "success"
            // isSuccess();
        } else if (turn === 10) {
            return "fail"
            // gameOver();
        } else {
            return "hint"
            // giveHint(randomNumber, userGuess);
        }
    }
}

export default Judge;