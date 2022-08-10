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
    while (this._player1.lifePoints > -1 && this._monster[].lifePoints > -1) {
      this._player1.attack(this._monster[]);
      this._monster[].attack(this._player1);
      if (this._player1.lifePoints === -1) winner = -1;
      if (this._monster[].lifePoints === -1) winner = 1;
    }
    return winner;
  }
}