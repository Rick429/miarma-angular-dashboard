import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DialogGiveAdminComponent } from '../dialogs/dialog-give-admin/dialog-give-admin.component';
import { Role, User } from '../models/interfaces/user-response.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastname', 'nick', 'email', 'datebirth', 'avatar', 'tipocuenta','role', 'acciones'];
  usersList: User[] = [];
  dataSource:any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private userService: UserService, private snackBar: MatSnackBar, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.userService.findAllUsers().subscribe(userResult => {
      this.usersList = userResult.content;
      this.dataSource = new MatTableDataSource<User>(this.usersList);
      this.dataSource.paginator = this.paginator;
    });
  }

  openDialogGiveAdmin(id:number, role:Role){
     this.dialog.open(DialogGiveAdminComponent, {
      height: '150px',
      width: '400px',
      data: {id: id, role: role}
    });
  }
}
