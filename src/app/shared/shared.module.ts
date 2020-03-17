import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatComponentsModule } from './modules/mat-components.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatComponentsModule,
    FormsModule,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatComponentsModule,
    FormsModule,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
