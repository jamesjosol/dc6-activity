import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberRandomizerComponent } from './number-randomizer/number-randomizer.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberRandomizerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
