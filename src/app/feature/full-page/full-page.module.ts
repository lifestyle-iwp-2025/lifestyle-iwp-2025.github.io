import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageComponent } from './full-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageModule } from '../main-page/main-page.module';
import { SubPageModule } from '../sub-page/sub-page.module';
import {FooterModule} from "../footer/footer.module";
import {NavbarModule} from "../../core/navbar/navbar.module";

const routes: Routes = [
  { path: ':topic', component: FullPageComponent },
  { path: '', component: FullPageComponent }
];

@NgModule({
  declarations: [FullPageComponent],
  exports: [FullPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MainPageModule,
    SubPageModule,
    FooterModule,
    NavbarModule
  ]
})
export class FullPageModule {}
