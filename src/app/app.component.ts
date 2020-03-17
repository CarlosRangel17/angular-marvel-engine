import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  version = '';

  ngOnInit() {
    this.title = environment.settings.appTitle;
    this.version = environment.settings.version;
  }
}
