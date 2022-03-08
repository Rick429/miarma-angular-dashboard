import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../services/post.service';

export interface PostDialogData {
  id: number;
}

@Component({
  selector: 'app-dialog-delete-post',
  templateUrl: './dialog-delete-post.component.html',
  styleUrls: ['./dialog-delete-post.component.css']
})
export class DialogDeletePostComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: PostDialogData, private snackBar: MatSnackBar, private postService: PostService) { }

  ngOnInit(): void {
  }

  deletePost(){
    this.postService.eliminarPost(this.data.id).subscribe(res => {
      history.go(0);
    });
  }

}
