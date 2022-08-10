import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(protected play1: Fighter, protected play2: Fighter) {
    super(play1);
    this._player1 = play1;
    this._player2 = play2;
  }
  
  fight(): number {
    let winner = 0;
    console.log('ENERGIA PLAY 1', this._player1.lifePoints);
    console.log('ENERGIA PLAY 2', this._player2.lifePoints);

    while (this._player1.lifePoints > -1 && this._player2.lifePoints > -1) {
      this._player1.attack(this._player2);
      console.log('ENERGIA PLAY 2 DEPOIS DO ATAQUE', this._player2.lifePoints);
      this._player2.attack(this._player1);
      console.log('ENERGIA PLAY 1 DEPOIS DO ATAQUE', this._player1.lifePoints);
    }
    if (this._player1.lifePoints === -1) winner = -1;
    if (this._player2.lifePoints === -1) winner = 1;
    return winner;
  }
}