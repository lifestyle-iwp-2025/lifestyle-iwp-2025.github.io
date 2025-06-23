import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubPageComponent } from './sub-page.component';
import {SturctureBlockModule} from "../sturcture-block/sturcture-block.module";
import {PosterButtonModule} from "../poster-button/poster-button.module";

@NgModule({
  declarations: [SubPageComponent],
  exports: [SubPageComponent],
  imports: [CommonModule, SturctureBlockModule, PosterButtonModule]
})
export class SubPageModule {}
