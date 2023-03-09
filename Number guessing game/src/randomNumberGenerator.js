class RandomNumberGenerator {
    constructor() {
        this.minNum = 1;
        this.maxNum = 100;

    }

    makeRandomNumber() {
        return Math.floor(Math.random() * this.maxNum + this.minNum);
    }
}

export {
    RandomNumberGenerator
};
