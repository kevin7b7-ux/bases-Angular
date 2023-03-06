import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    public heroNames: string[] = ['Spiderman', 'Ironman', 'Batman'];
    public heroRemoved?: string;

    removeLastHero(): void {
      this.heroRemoved = this.heroNames.pop();
    }

}
