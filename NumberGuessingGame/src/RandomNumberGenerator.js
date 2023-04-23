const RandomNumberGenerator = {
    MIN : 1,
    MAX : 100,
    makeRandomNumber() {
        return Math.floor(Math.random() * this.MAX + this.MIN)
    }
}

export default RandomNumberGenerator;