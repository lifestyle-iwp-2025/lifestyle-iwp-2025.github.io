import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterButtonComponent } from './poster-button.component';

@NgModule({
  declarations: [PosterButtonComponent],
  exports: [PosterButtonComponent],
  imports: [CommonModule]
})
export class PosterButtonModule {}
