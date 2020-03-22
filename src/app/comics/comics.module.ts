import { ComicListComponent } from './components/comic-list/comic-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';

@NgModule({
  declarations: [ComicListComponent, ComicDetailComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ComicListComponent
  ]
})
export class ComicsModule { }
