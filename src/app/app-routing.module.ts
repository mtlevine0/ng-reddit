import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SubredditComponent } from './subreddit/subreddit.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/r/all', pathMatch: 'full' },
  { path: 'r/:subreddit', component: SubredditComponent },
  { path: 'r/:subreddit/comments/:postId', component: PostComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}