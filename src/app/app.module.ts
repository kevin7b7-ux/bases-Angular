import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { NarutoModule } from './naruto/naruto.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    NarutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
