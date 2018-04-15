import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  subredditId: string;
  postId: string;
  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subredditId = this.route.snapshot.paramMap.get('subreddit');
    this.postId = this.route.snapshot.paramMap.get('postId');
    this.loadPost(this.subredditId, this.postId);
  }

  loadPost(subredditId: string, postId: string): void {
    this.postService.getPost(subredditId, postId).subscribe(
      (data) => {
        this.post = data.body;
      },
      (err) => {
      },
      () => {
      } 
    )
  }

}
