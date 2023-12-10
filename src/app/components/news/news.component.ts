import { Component, Input } from '@angular/core';
import { INewsArticles, INewsResponse } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  @Input('countryCode') public countryCode:string;
  @Input('title') public title:string;
  @Input('headerStyle') public headerStyle:string;
  @Input('bgStyle') public bgStyle:string;

  public newsRecords:INewsArticles[];

  constructor(public newsService:NewsService){
    this.newsRecords= [];
    this.title = '';
    this.countryCode = '';
    this.bgStyle = '';
    this.headerStyle = '';
  }

  public ngOnInit():void{

    // this.newsService.getNewsByCountry(this.countryCode).subscribe((data:INewsResponse)=>{
    //   this.newsRecords = data.articles;
    // })

    this.newsService.getMergedNewsData().subscribe((data:INewsResponse)=>{
      console.log('combined news data',data)
    })
  }

}
