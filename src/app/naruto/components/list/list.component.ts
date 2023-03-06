import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'naruto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [{
    name: 'Ino',
    edad: 16
  }];

  onDelete(id?: string):void {
    if (!id) return; 
    this.onDeleteCharacter.emit(id)

  }

}
