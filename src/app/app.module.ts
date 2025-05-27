import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FullPageComponent} from "./full-page/full-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {SubPageComponent} from "./sub-page/sub-page.component";
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,
    FullPageComponent,
    MainPageComponent,
    SubPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet
  ]
})
export class AppModule { }
