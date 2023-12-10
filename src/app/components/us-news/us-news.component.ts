import { Component } from '@angular/core';
import { INewsArticles, INewsResponse } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-us-news',
  templateUrl: './us-news.component.html',
  styleUrls: ['./us-news.component.css']
})
export class UsNewsComponent {
  public usNewsRecords:INewsArticles[];

  constructor(public indiaNewsService:NewsService){
    this.usNewsRecords= []
  }

  public ngOnInit():void{

    this.indiaNewsService.getNewsByCountry('us').subscribe((data:INewsResponse)=>{
      this.usNewsRecords = data.articles;
    })
  }
}
