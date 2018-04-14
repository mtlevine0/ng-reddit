import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SubredditComponent } from './subreddit/subreddit.component';
import { PostComponent } from './subreddit/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: ':subreddit', component: SubredditComponent },
  { path: ':subreddit/comments/:postId', component: PostComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}