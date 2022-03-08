import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/models/dto/loginDto';
import { AuthService } from 'src/app/services/auth.service';

const TOKEN = 'token'
const AVATAR = 'avatar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDto = new LoginDto();

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.login(this.loginDto).subscribe(loginResult => {

      if(loginResult.token!=null) {
        localStorage.setItem(TOKEN, loginResult.token);
        localStorage.setItem(AVATAR, loginResult.avatar);
        this.router.navigate(['/postlist']);
        alert(`token: ${loginResult.token}`)
        console.log(`token: ${loginResult.token}`)
      }

    });
  }
}
