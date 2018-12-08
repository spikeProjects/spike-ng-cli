import { Component } from '@angular/core';
import { DataService } from 'sf-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spike-ng-cli';

  constructor(
    private service: DataService
  ) {
    this.service.getData().subscribe(console.log);
  }


}
