
class randomNumberGenerator {
    constructor(){
        this.minNum = 1;
        this.maxNum = 100;

    }

    static makeRandomNumber(){
        return Math.floor(Math.random()*maxNum + minNum);
    }
}
