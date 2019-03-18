import {
// tslint:disable-next-line: max-line-length
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatExpansionModule, MatSlideToggleModule, MatCardModule, MatGridListModule, MatListModule, MatDividerModule
    } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatExpansionModule,
      MatSlideToggleModule,
      MatCardModule,
      MatGridListModule,
      MatListModule,
      MatDividerModule
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatExpansionModule,
      MatSlideToggleModule,
      MatCardModule,
      MatGridListModule,
      MatListModule,
      MatDividerModule
    ],
})
export class MaterialModule { }