import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from 'src/app/core/models/character.model';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html'
})
export class CharacterCardComponent {
  @Input('character') character: Character;
  @Output('selectedChange') selectedChange = new EventEmitter<Character>();

  constructor(private _coreService: CoreService) {}

  getCharacterImage(): string {
    var size = 'standard_xlarge'; // landscape_incredible

    return this._coreService.getImage(size, this.character.thumbnail);
  }

  getCharacterLink(): string {
    return this._coreService.getCharacterDetailsUrl(this.character);
  }

  showCharacter() {
    this.selectedChange.emit(this.character);
  }
}
