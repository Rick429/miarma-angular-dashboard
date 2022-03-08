import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogDeletePostComponent } from 'src/app/dialog-delete-post/dialog-delete-post.component';
import { Post } from 'src/app/models/interfaces/post-response.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})

export class PostTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nick', 'titulo', 'descripcion', 'archivo', 'acciones'];
  postsList: Post[] = [];
  dataSource:any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private postService: PostService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.postService.findAllPosts().subscribe(postResult => {
      this.postsList = postResult.content;
      this.dataSource = new MatTableDataSource<Post>(this.postsList);
      this.dataSource.paginator = this.paginator;
    });
  }

  deletePost(id:number){
    this.dialog.open(DialogDeletePostComponent, {
     height: '150px',
     width: '300px',
     data: {id: id}
   });
 }

}

