import { Component, Input } from '@angular/core';

import { Character } from 'src/app/core/models/character.model';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {
  @Input("character") character: Character; 

  constructor(private _coreService: CoreService) { }
  
  getAvatar(): string {
    return this._coreService.getImage('standard_medium', this.character.thumbnail);
  }

  getCharacterImage(): string {
    return this._coreService.getImage('portrait_uncanny', this.character.thumbnail);
  }

   getCharacterLink(): string {
     return this._coreService.getCharacterDetailsUrl(this.character);
   }
}
