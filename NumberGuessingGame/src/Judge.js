const Judge = {
    checkResult(randomNumber,userGuess,turn) {
        

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