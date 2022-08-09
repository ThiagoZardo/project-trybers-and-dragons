import Race from './Race';

export default class Halfing extends Race {
  private _maxLifePoints: number;
  private static instances = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfing.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfing.instances;
  }
}