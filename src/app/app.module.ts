import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { SubredditService } from './subreddit.service';

import { AppComponent } from './app.component';
import { PostComponent } from './subreddit/post/post.component';
import { SubredditComponent } from './subreddit/subreddit.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SubredditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SubredditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
