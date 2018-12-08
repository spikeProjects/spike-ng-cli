import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';

@Component({
  selector: 'sf-sf-lib',
  template: `
    <p>
      sf-lib works!
    </p>
  `,
  styles: []
})
export class SfLibComponent implements OnInit {

  constructor(
    // private service: DataService
  ) { }

  ngOnInit() {
    // this.service.getData().subscribe(console.log);
  }

}
