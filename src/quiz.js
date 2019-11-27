
const characters = require('../characters/characters');


function Quiz() {
    this.deck = []; // deck of Cards
    this.correct = [];
    this.wrong = [];
}
Game.prototype.start = function () {
    getRandom();
}

Game.prototype.getRandom = (n) => {
    while (this.deck.length < 10) {
        let char = characters[Math.floor(Math.random() * characters.length)];
        if(this.deck.indexOf(char) != -1) {
            this.deck[i] = char;
        }
    }
}