import { CharactersModule } from '../characters/characters.module';
import { CommonModule } from '@angular/common';
import { CoreService } from './core.service';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [
    CommonModule,
    CharactersModule,
    SharedModule
  ],
  providers: [
    CoreService
  ]
})
export class CoreModule { }
