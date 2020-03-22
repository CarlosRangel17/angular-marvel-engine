import { Component, Input, OnInit } from '@angular/core';

import { Comic } from 'src/app/core/models/comic.model';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent {
  @Input() comic: Comic;

  constructor(private _coreService: CoreService) { }

  getComicImage(): string {
    return this._coreService.getImage('portrait_fantastic', this.comic.thumbnail);
  }
}
