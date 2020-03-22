import { Component, Input } from '@angular/core';
import { Overview, OverviewType } from 'src/app/core/models/overview.model';

import { Character } from 'src/app/core/models/character.model';
import { CoreService } from 'src/app/core/core.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html'
})
export class CharacterCardComponent {
  @Input('character') character: Character;
  size: string = 'standard_xlarge'; // landscape_incredible

  constructor(private _coreService: CoreService, private _sharedService: SharedService) {}

  getCharacterImage(): string {
    return this._coreService.getImage(this.size, this.character.thumbnail);
  }

  getCharacterLink(): string {
    return this._coreService.getCharacterDetailsUrl(this.character);
  }

  showCharacter() {
    // this.selectedChange.emit(this.character); Changed from output to shared service change emission
    this._sharedService.emitChange(new Overview(this.character, OverviewType.Character));
  }
}
