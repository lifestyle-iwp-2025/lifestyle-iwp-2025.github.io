import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {CoreModule} from './core/core.module';
import {FullPageModule} from './feature/full-page/full-page.module';
import {MainPageModule} from './feature/main-page/main-page.module';
import {SubPageModule} from './feature/sub-page/sub-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    FullPageModule,
    MainPageModule,
    SubPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
