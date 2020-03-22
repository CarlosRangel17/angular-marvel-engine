import { Character } from './character.model';
import { Comic } from './comic.model';

export class Overview {
    type: OverviewType; 
    detail: Character | Comic;

    constructor(model: Character | Comic, overviewType: OverviewType){
        this.detail = model;
        this.type = overviewType;
    }
}

export enum OverviewType {
    Character = 1,
    Comic = 2
}