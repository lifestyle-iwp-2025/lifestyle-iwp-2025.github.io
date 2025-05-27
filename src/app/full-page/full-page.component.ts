import { Component } from '@angular/core';
import {ConfigService} from "../service/config.service";
import {ConfigModel} from "../model/config.model";

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrl: './full-page.component.css'
})
export class FullPageComponent {
  // config: ConfigModel
  config: any

  constructor(
    configService: ConfigService
  ) {
    configService.getConfig().subscribe(value => {
      this.config = value;
      console.log(this.config);
    });
  }
}
