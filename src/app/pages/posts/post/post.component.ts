import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  public post: Post;

  @Output()
  public clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.clickPost.emit(this.post.id);
  }

}
