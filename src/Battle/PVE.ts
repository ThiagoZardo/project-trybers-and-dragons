import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _monster: Monster[] | Fighter[] | SimpleFighter[];

  constructor(
    play1: Fighter,
    monster: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(play1);
    this._player1 = play1;
    this._monster = monster;
  }

  fight(): number {
    let winner = 0;
    for (let i = 0; i < this._monster.length; i += 1) {
      while (
        this._player1.lifePoints === -1 || this._monster[i].lifePoints === -1
      ) {
        this._player1.attack(this._monster[0]);
        if (this._monster[i].lifePoints === -1) winner = -1;
        this._monster[i].attack(this._player1);
        if (this._player1.lifePoints === -1) winner = 1;
      }
    }
    return winner;
  }
}