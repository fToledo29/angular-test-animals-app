export class Actions {
  public energy = 0;

  animalKind = '';
  sound = '';
  constructor(animalKind: string, sound: string) {
    this.animalKind = animalKind;
    this.sound = sound;
  }

  public makeSound() {
    return this.animalKind + ' does ' + this.sound;
  }

  public eatFood() {
    return this.animalKind + ' eating';
  }

  public speep() {
    return this.animalKind + ' sleeping';
  }

  setEnergy(energy: number) {
    this.energy = energy;

  }

  getEnergy() {
    return this.energy;
  }


}
