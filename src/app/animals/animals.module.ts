import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JungleComponent } from './jungle/jungle.component';
import { FormsModule } from '@angular/forms';
import { ZooComponent }  from './zoo/zoo.component';

@NgModule({
  declarations:[
    JungleComponent,
    ZooComponent
    ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [JungleComponent],
  providers:[]
})
export class Animals {}