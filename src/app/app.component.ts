import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatDrawer } from '@angular/material';
import { Overview } from './core/models/overview.model';
import { SharedService } from './shared/services/shared.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = '';
  version = '';
  overview: Overview;
  folders: any[] = [
    {
      icon: 'videogame_asset',
      name: 'Marvel Games',
      // updated: 'Avenger Feud | Trivia',
    },
    {
      icon: 'explore',
      name: 'Explore',
      // updated: 'Characters | Comics',
    },
    {
      icon: 'map',
      name: 'World Map',
    }
  ];
  ops: any[] = [
    {
      icon: 'show_chart',
      name: 'Trending Marvel',
    },
    {
      icon: 'language',
      name: 'Change Language',
    }
  ];
  notes: any[] = [
    {
      icon: 'feedback',
      name: 'Feedback',
    },
    {
      icon: 'help',
      name: 'Angular Initiative',
    }
  ];
  @ViewChild(MatDrawer, { static: false }) drawer: MatDrawer;

  constructor(private _sharedService: SharedService) {
    this._sharedService.changeEmitted$.subscribe(
      (overview: Overview) => {
        console.log(overview);
        this.overview = overview;
        this.drawer.toggle();
      }
    )
  }

  ngOnInit() {
    this.title = environment.settings.appTitle;
    this.version = environment.settings.version;
  }
}
