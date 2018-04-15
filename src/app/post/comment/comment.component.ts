import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../post.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Post;

  constructor() {
  }

  ngOnInit() {
    if(this.comment.data.children.length === 0) {
      // this.comment.data.children = [{data: {
      //   body: "There's nothing here!"
      // }}];
    }
  }

}
