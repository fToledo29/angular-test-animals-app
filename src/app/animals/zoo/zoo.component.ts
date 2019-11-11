import { Component } from '@angular/core';
import { Animal } from '../../shared/interfaces/animal.interface';
import { AnimalMock } from '../../shared/mockData/animal.mock';

@Component({
  selector: 'app-zoo-component',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})

export class ZooComponent {
  public animal: Animal;

  constructor() {
    let mock = new AnimalMock();
    this.animal = mock.getData();
  }
}