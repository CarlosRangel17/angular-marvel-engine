import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs/operators';

import { Character } from 'src/app/core/models/character.model';
import { Comic } from 'src/app/core/models/comic.model';
import { ComicService } from '../../comic.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnChanges {
  comics: Comic[] = [];
  showProgress = false;

  @Input("character") character: Character;
  
  constructor(private _comicService: ComicService) { }

  ngOnChanges() {
    this.comics = [];
    this.showProgress = true;
    this._comicService.getComics(this.character.id).pipe(
      map(comics => this.comics = comics.filter(c => c.digitalId > 0)),
      finalize(() => this.showProgress = false)
    ).subscribe();
  }

  trackByComics(index: number, comic: Comic) {
    return comic.id;
  }
}
