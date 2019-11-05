// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// **Custom**
import { Animals } from './animals/animals.module';
// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    Animals
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
