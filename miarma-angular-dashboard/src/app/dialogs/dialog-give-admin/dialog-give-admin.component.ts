import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Role } from 'src/app/models/interfaces/user-response.interface';
import { UserService } from 'src/app/services/user.service';

export interface UserDialogData {
  id: number;
  role: Role;
}

@Component({
  selector: 'app-dialog-give-admin',
  templateUrl: './dialog-give-admin.component.html',
  styleUrls: ['./dialog-give-admin.component.css']
})
export class DialogGiveAdminComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: UserDialogData, private snackBar: MatSnackBar, private userService:UserService) { }

  ngOnInit(): void {
  }

  giveAdmin(){
    if(this.data.role=="ADMIN"){
      this.snackBar.open('Este usuario ya tiene el rol de admin', 'Aceptar');
    }else{
      this.userService.giveAdmin(this.data.id).subscribe(res => {
        history.go(0);
      });
    }
  }

  closeDialog(){
    history.go(0);
  }

}
