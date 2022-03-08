import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/interfaces/post-response.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() postInput!: Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  deletePost(id: number){
    this.postService.eliminarPost(id).subscribe(res => {
      alert("eliminado");
    });
  }
}
