import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListElementComponent } from './news-list-element/news-list-element.component';
import { AddNewsComponent } from './add-news/add-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsListElementComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
