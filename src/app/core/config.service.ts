import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigModel} from "../feature/model/config.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  getConfig(): Observable<ConfigModel> {
    return this.http.get<ConfigModel>('https://lifestyle-iwp-2025.github.io/data/config.json');
  }
}
