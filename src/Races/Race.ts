abstract class Race {
  constructor(private _name: string, private _dexterity: number) {
    this._name = _name;
    this._dexterity = _dexterity;
  }

  public get name(): string {
    return this._name;
  }

  public set dexterity(value: number) {
    this._dexterity = value;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;