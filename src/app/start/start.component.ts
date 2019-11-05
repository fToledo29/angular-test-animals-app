import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-start-component',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000) )
    ])
  ]
})

export class StartComponent {
  snakeImgPath = 'https://cdn.jsdelivr.net/gh/fToledo29/angular-test-animals-app@dev/src/assets/imgs/snake-149010_1280.png';

  // getTransfor() {
  //   return `translateX($(245 - ))`
  // }
} 
