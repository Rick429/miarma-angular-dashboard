import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/interfaces/post-response.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postsList: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.findAllPosts().subscribe(postResult => {
      this.postsList = postResult.content;
    });
  }
}
