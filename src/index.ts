import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// players
export const player1 = new Character('player1');
for (let i = 0; i < 3; i += 1) player1.levelUp();
export const player2 = new Character('player2');
export const player3 = new Character('player3');

// monsters
export const monster1 = new Monster();
export const monster2 = new Dragon();

// PVP
export const pvp = new PVP(player2, player3);

// PVE
export const pve = new PVE(player1, [monster1, monster2]);

// runBattles
export const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};
