import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeletePostComponent } from 'src/app/dialog-delete-post/dialog-delete-post.component';
import { Post } from 'src/app/models/interfaces/post-response.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() postInput!: Post;

  constructor(private postService: PostService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  deletePost(id:number){
    this.dialog.open(DialogDeletePostComponent, {
     height: '150px',
     width: '300px',
     data: {id: id}
   });
 }
}
