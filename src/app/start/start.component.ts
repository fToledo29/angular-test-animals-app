import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-start-component',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class StartComponent implements OnInit {
  snakeImgPath = 'https://cdn.jsdelivr.net/gh/fToledo29/angular-test-animals-app@dev/src/assets/imgs/snake-149010_1280.png';

  constructor() {}

  ngOnInit() {
    
  }

  
} 
