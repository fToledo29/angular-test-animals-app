import { Actions } from '../animal.actions/actions';

export class Monkeys extends Actions {

  play() {
    return this.animalKind + ' playing';
  }

}
