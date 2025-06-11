import {Component, Input, OnInit} from '@angular/core';
import {ConfigModel} from "../model/config.model";

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrl: './sub-page.component.css'
})
export class SubPageComponent implements OnInit {
  @Input() topicData!: ConfigModel;

  ngOnInit(): void {
    let headerCover = document.getElementById('headerCover');
    if (headerCover) {
      headerCover.style.backgroundColor = this.topicData.secondaryColor;
    }

    let body = document.getElementById('body');
    if (body) {
      body.style.backgroundColor = this.topicData.backgroundColor;
    }
  }
}
