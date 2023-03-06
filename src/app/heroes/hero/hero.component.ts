import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  
  public name: string = 'Batman';
  public age: number = 45;
  public changed: boolean = false;
  
  
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero():void {
    this.name = 'Black Panter';
    this.changed = true;
  }

  changeAge():void {
    
    this.age = 30;

  }
}
