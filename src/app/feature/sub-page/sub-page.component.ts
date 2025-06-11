import {Component, Input} from '@angular/core';
import {ConfigModel} from "../model/config.model";

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrl: './sub-page.component.css'
})
export class SubPageComponent {
  @Input() topicData!: ConfigModel;

}
