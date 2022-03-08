import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formulario = new FormGroup({
    nick: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  loginDto = new LoginDto();

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.loginDto.nick=this.formulario.get('nick')?.value;
    this.loginDto.password=this.formulario.get('password')?.value;
    this.authService.login(this.loginDto).subscribe(loginResult => {

      if(loginResult.token!=null) {
        localStorage.setItem(TOKEN, loginResult.token);
        localStorage.setItem(AVATAR, loginResult.avatar);
        this.router.navigate(['/tablas']);
      }

    });
  }
}
