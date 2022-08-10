"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(play1, play2) {
        super(play1);
        this.play1 = play1;
        this.play2 = play2;
        this._player1 = play1;
        this._player2 = play2;
    }
    fight() {
        let winner = 0;
        while (this._player1.lifePoints > -1 && this._player2.lifePoints > -1) {
            this._player1.attack(this._player2);
            this._player2.attack(this._player1);
        }
        if (this._player1.lifePoints === -1)
            winner = -1;
        if (this._player2.lifePoints === -1)
            winner = 1;
        return winner;
    }
}
exports.default = PVP;
