import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ConfigService} from "../../core/config.service";

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.css']
})
export class FullPageComponent implements OnInit {
  topic: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService) {
  }

  ngOnInit(): void {
    // Workaround: Parameter aus der URL extrahieren
    const url = document.URL;
    const segments = url.split('/');
    let segment: string = segments[segments.length - 1]; // Nimmt den letzten Teil der URL
    this.topic = segment.slice(1, segment.length - 1);
    console.log('Extracted Topic:', this.topic);

    this.configService.getConfig().subscribe(value => {
      console.log(value);
    });
  }
}
