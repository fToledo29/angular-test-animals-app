import { Component } from '@angular/core';
import { Actions } from './animal.actions/actions';
import { Monkeys } from './animals/monkeys';
import { Snakes } from './animals/snakes';
import { Tigers } from './animals/tigers';

@Component({
  selector: 'app-jungle-component',
  templateUrl: './jungle.component.html',
  styleUrls: ['./jungle.component.css']
})
export class JungleComponent {
  energySoundLevel: number; // for making a sound
  energyFoodLevel: number; // for eating food
  energySleepingLevel: number; // for sleeping
  actionExecuted: string;
  animal: string;
  animalActions: Actions;
  animalEnergy = 0;

  constructor() {
    this.setEnergy();
  }

  onDataChange() {
    const animal = this.animal;
    const animalToValidate = animal.toLowerCase();
    const animalSound = this.getAnimalSound(animalToValidate);
    // if (animal === 'monkey') {
    //   this.animalActions  = new Monkeys(animal, animalSound);
    // } else {
    this.animalActions  = this.getAnimal(animalToValidate, animal, animalSound);
    // }
    this.animalEnergy = this.animalActions.getEnergy();
    this.setEnergy();
  }

  getAnimal(animalToValidate: string, animal: string, animalSound: string) {
    switch (animalToValidate) {
      case 'tiger' :
        return new Tigers(animal, animalSound);
      case 'monkey' :
        return  new Monkeys(animal, animalSound);
      case 'snake' :
        return  new Snakes(animal, animalSound);
    }
  }

  setEnergy() {
    this.energySoundLevel = 3;
    this.energyFoodLevel = 5;
    this.energySleepingLevel = 10;
  }

  getAnimalSound(animalToValidate: string) {
    switch (animalToValidate) {
      case 'tiger' :
        return 'grrrrrr';
      case 'monkey' :
        return 'OoooOOoOoo';
      case 'snake' :
        return 'Ssssssssssss';
    }
  }

  onMonkeyPlay() {
    // this.actionExecuted = this.animalActions.play();
  }

  onSleeping() {
    this.actionExecuted = this.animalActions.speep();
  }

  onMakeASound() {
    this.actionExecuted = this.animalActions.makeSound();
  }

  onEating() {
    this.actionExecuted = this.animalActions.eatFood();
  }

  onDecrees() {
    this.animalEnergy--;
    this.animalActions.setEnergy(this.animalEnergy);
  }

  onIncrease() {
    this.animalEnergy++;
    if (this.animalEnergy === this.energySoundLevel) {
      this.onMakeASound();
      this.energySoundLevel = this.energySoundLevel + 3;
    }
    if (this.animalEnergy === this.energyFoodLevel) {
      this.onEating();
      this.energyFoodLevel = this.energyFoodLevel + 5;
    }
    if (this.animalEnergy === this.energySleepingLevel) {
      this.onSleeping();
      this.energySleepingLevel = this.energySleepingLevel + 10;
    }
  }

}
