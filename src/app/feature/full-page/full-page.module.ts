import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageComponent } from './full-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':topic', component: FullPageComponent },
  { path: '', component: FullPageComponent }
];

@NgModule({
  declarations: [FullPageComponent],
  exports: [FullPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class FullPageModule {}
