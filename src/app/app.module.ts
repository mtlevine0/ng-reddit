import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { SubredditService } from './subreddit.service';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { SubredditComponent } from './subreddit/subreddit.component';
import { PostService } from './post.service';
import { CommentComponent } from './post/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SubredditComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SubredditService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
