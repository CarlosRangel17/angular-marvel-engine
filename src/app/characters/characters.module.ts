import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [CharacterCardComponent, CharacterListComponent, CharacterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CharacterCardComponent]
})
export class CharactersModule { }
