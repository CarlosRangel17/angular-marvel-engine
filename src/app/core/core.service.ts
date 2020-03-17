import { Character } from './models/character.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerService } from '../shared/services/logger.service';
import { Thumbnail } from './models/thumbnail.model';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoreService {

    constructor(private logger: LoggerService) { }

    getCharacterDetailsUrl(character: Character): string {
        const detail = character.urls.find(url => url.type === 'detail');
        return detail ? detail.url : 'https://marvel.com';
    }

    getImage(variant: string, thumbnail: Thumbnail): string {
        return `${thumbnail.path}/${variant}.${thumbnail.extension}`;
    }

    handleError = (error: HttpErrorResponse) => {

        if (error.error instanceof ErrorEvent) {
            throw error;
        }
        else {
            this.logger.error("Something bad happened; please try again later.",
                error,
                environment.settings.appErrorPrefix);
        }

        return throwError(error);
    }
}