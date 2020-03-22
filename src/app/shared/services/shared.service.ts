import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // Observable 'Overview' model sources 
  private emitChangeSeource = new Subject<any>();

  // Observable 'Overview' model streams
  changeEmitted$ = this.emitChangeSeource.asObservable();

  // Service message commands 
  emitChange(change: any) {
    this.emitChangeSeource.next(change);
  }
}
