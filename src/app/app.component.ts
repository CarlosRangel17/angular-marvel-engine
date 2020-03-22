import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDrawer } from '@angular/material';
import { Overview } from './core/models/overview.model';
import { SharedService } from './shared/services/shared.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  version = '';
  overview: Overview;
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
