import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Observable<Post[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.posts = this.dataService.getPosts();
  }

  clickPost(id: number): void {
    console.log(id);
  }

}
