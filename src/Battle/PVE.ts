import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _monster: SimpleFighter[];

  constructor(
    play1: Fighter,
    monster: SimpleFighter[],
  ) {
    super(play1);
    this._player1 = play1;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((el) => {
      while (el.lifePoints > -1 && this._player1.lifePoints > -1) {
        this._player1.attack(el);
        el.attack(this._player1);
      }
    });
    
    return super.fight();
  }
}