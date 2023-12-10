import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { INewsResponse } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http:HttpClient) { }

  public getNewsByCountry(countryCode:String):Observable<INewsResponse>{
    return this.http.get<INewsResponse>(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=362d5cd20958413dbd382057cd77b44f`)
  }

  public getMergedNewsData(){
    const apiCall1 = this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=in&apiKey=362d5cd20958413dbd382057cd77b44f`)
    const apiCall2 = this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=362d5cd20958413dbd382057cd77b44f`)
    const apiCall3 = this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=fr&apiKey=362d5cd20958413dbd382057cd77b44f`)
    const apiCall4 = this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=362d5cd20958413dbd382057cd77b44f`)
  return merge(apiCall1,apiCall2,apiCall3,apiCall4)
  }

}
