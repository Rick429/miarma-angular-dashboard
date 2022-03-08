import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  showFiller = false;
  menu=0;
  postTable=false;
  postList=false;
  userTable=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear;
    this.router.navigate(['/login']);
  }

  changeTable(numero:number) {
    if(numero==0){
      this.postTable=false;
      this.postList=false;
      this.userTable=true;
    }else if(numero == 1){
      this.postTable=true;
      this.postList=false;
      this.userTable=false;
    } else {
      this.postTable=false;
      this.postList=true;
      this.userTable=false;
    }
  }
}
