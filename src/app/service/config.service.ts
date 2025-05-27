import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
  ) { }

  getConfig() {
    // return this.http("https://lifestyle-iwp-2025.github.io/data/config.json");
    return this.http.get("http://localhost:8080");
  }
}
