import { catchError, map } from 'rxjs/operators';

import { Comic } from '../core/models/comic.model';
import { CoreService } from '../core/core.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class ComicService {
    constructor(private http: HttpClient, private _coreService: CoreService) {}

    getComics(characterId: number): Observable<Comic[]> {
        return this.http
            .get<Comic[]>(`${environment.apiUrl}characters/${characterId}/comics`)
            .pipe(
                map((response: any) => response.data.results),
                catchError(this._coreService.handleError)
            );
    }
}