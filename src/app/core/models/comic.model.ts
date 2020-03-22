import { Thumbnail } from './thumbnail.model';

export interface Comic {
    id: number;
    digitalId: number;
    thumbnail: Thumbnail;
}