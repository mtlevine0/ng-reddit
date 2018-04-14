import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../subreddit.service';

import { Subreddit } from '../subreddit.interface';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {
  subreddit: Subreddit;
  subredditId: string;

  constructor(private subredditService: SubredditService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.subredditId = this.route.snapshot.paramMap.get('subreddit');
    this.loadSubreddit(this.subredditId);
  }

  loadSubreddit(subreddit: string): void {
    this.subredditService.getPosts(subreddit).subscribe(
      (data) => {
        this.subreddit = data.body;
      },
      (err) => {
      },
      () => {
      } 
    )
  }

}
