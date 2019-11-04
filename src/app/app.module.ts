// Modules
import { NgModule } from '@angular/core';
// **Custom**
import { Animals } from './animals/animals.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    Animals
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
