import { NgModule } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule, NavbarModule],
  exports: [NavbarModule],
  providers: [ConfigService]
})
export class CoreModule {}
