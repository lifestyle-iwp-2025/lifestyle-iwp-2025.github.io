import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubPageComponent } from './sub-page.component';

@NgModule({
  declarations: [SubPageComponent],
  exports: [SubPageComponent],
  imports: [CommonModule]
})
export class SubPageModule {}
