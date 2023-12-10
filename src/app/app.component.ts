import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public newsDataRecords: any;
  constructor() {
    this.newsDataRecords = [];
  }

  public ngOnInit(): void {
    this.newsDataRecords = [
      { cc: 'in', title: 'INDIA',headerStyle:"green",bgColor:'lightgreen' },
      { cc: 'us', title: 'USA',headerStyle:"pink",bgColor:'lightpink' },
      { cc: 'fr', title: 'FRANCE',headerStyle:"blue" ,bgColor:'lightblue'},
      { cc: 'gb', title: 'BRTAIN',headerStyle:"red" ,bgColor:'coral'},
    ];
  }
}
