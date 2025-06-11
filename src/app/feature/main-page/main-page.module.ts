import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {SturctureBlockModule} from "../sturcture-block/sturcture-block.module";

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, SturctureBlockModule]
})
export class MainPageModule {}
