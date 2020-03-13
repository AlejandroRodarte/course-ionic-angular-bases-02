import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this
      .dataService
      .getPosts()
      .pipe(
        tap(console.log)
      )
      .subscribe();
  }

}
