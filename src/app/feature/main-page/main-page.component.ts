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
        let topics = document.getElementsByClassName("topics");
        console.log("Topics found: " + topics[0].children.length);

        for (let i = 0; i < topics.length; i++) {
            console.log(topics[i].innerHTML)
        }
    }

}
