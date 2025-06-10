import { NgModule } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [ConfigService]
})
export class CoreModule {}
