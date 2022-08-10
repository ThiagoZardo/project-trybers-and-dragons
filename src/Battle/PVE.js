"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(play1, monster) {
        super(play1);
        this._player1 = play1;
        this._monster = monster;
    }
    fight() {
        this._monster.forEach((el) => {
            while (el.lifePoints > -1 && this._player1.lifePoints > -1) {
                this._player1.attack(el);
                el.attack(this._player1);
            }
        });
        return super.fight();
    }
}
exports.default = PVE;
