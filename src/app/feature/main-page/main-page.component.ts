import {Component, Input, OnInit} from '@angular/core';
import {ConfigModel} from "../model/config.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{
    @Input() topicDataList!: ConfigModel[];

    ngOnInit(): void {
        //TODO: idk wass ich hier machen soll
      setTimeout(() => {
        let topic = document.getElementsByClassName("topic");
        console.log("Topics found: " + topic.length);

        for (let i = 0; i < topic.length; i++) {
          let split = topic[i].innerHTML.split(">");
          let string =
            split[0] + "style=\"background-color: " + this.topicDataList[i].secondaryColor + "\"" + ">";
          for (let j = 1; j < split.length; j++) {
            string += split[j];
            if (j !== split.length - 1) {
              string += ">";
            }
          }
          topic[i].innerHTML = string;
        }
      }, 350);
    }

}
