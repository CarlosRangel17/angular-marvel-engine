import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Character } from '../core/models/character.model';
import { CoreService } from '../core/core.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class CharacterService {
    constructor(private http: HttpClient, private coreService: CoreService) {} 

    getCharacter(characterId?: number): Observable<Character[]> {
      return this.http
      .get<Character>(`${environment.apiUrl}characters${(characterId ? '/' + characterId : '')}`)
      .pipe(
        map((response: any) => response.data.results),
        catchError(this.coreService.handleError)
      )
    }

    getCharacters(term: string): Observable<Character[]> {
        const options = new HttpParams().set('nameStartsWith', term); 
        return this.http
        .get<Character[]>(`${environment.apiUrl}characters`, {params: options})
        .pipe(
          map((response: any) => response.data.results),
          catchError(this.coreService.handleError)
        );
    }
}