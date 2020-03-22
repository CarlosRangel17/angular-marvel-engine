import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CharacterCardComponent, CharacterListComponent, CharacterComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CharacterCardComponent, CharacterDetailComponent]
})
export class CharactersModule { }
