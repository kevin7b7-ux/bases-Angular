import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class NarutoService {

  public characters: Character[] = [
    {
        id: uuid(),
        name: 'Shikamaru',
        edad: 19
    },
    {
        id: uuid(),
        name: 'Naruto',
        edad: 19
    },
    {
        id: uuid(),
        name: 'Kiba',
        edad: 17
    }

    
];
    onNewCharacter( character : Character):void { 
        const newCharacter: Character = {id: uuid(), ...character};
        this.characters.push(character)
    }

    deleteCharacterById( id: string):void {
        this.characters = this.characters.filter( character => character.id !== id);
    }
}
