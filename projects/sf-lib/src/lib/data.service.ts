import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SfLibConfigService } from './sf-lib-config.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    @Inject(SfLibConfigService) private config
  ) { }

  getData(): any {
    return this.http.get(this.config.dataUrl);
  }
}
