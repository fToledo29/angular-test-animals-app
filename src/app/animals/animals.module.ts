import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JungleComponent } from './jungle.component/jungle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:[JungleComponent],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [JungleComponent],
  providers:[]
})
export class Animals {}