import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndiaNewsComponent } from './components/india-news/india-news.component';
import { UsNewsComponent } from './components/us-news/us-news.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NewsComponent } from './components/news/news.component';
import { StockRecordsComponent } from './components/stock-records/stock-records.component';
@NgModule({
  declarations: [
    AppComponent,
    IndiaNewsComponent,
    UsNewsComponent,
    NewsComponent,
    StockRecordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
