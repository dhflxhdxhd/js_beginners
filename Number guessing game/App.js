const input = document.getElementsByClassName("guessInput");

const minNum = 1;
const maxNum = 100;

function makeRandomNumber(){
    return Math.floor(Math.random * maxNum + minNum);

}

function play(){
    let randomNumber = makeRandomNumber();
}

play();