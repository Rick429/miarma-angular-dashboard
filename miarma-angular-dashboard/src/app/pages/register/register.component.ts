import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserNewDto } from 'src/app/models/dto/user-new-dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new UserNewDto();
  token!:String;
  formulario = new FormGroup({
    nick: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4)]),
    tipocuenta: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
    dateBirth: new FormControl('', [Validators.required])

  })
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(){
    this.user.nick=this.formulario.get('nick')?.value;
    this.user.name=this.formulario.get('name')?.value;
    this.user.lastname=this.formulario.get('lastname')?.value;
    this.user.email=this.formulario.get('email')?.value;
    this.user.tipocuenta=this.formulario.get('tipocuenta')?.value;
    this.user.password=this.formulario.get('password')?.value;
    this.user.password2=this.formulario.get('password2')?.value;
    this.user.datebirth=this.formulario.get('dateBirth')?.value;

    this.authService.register(this.user).subscribe(usuario =>{
      localStorage.setItem('token', usuario.token);
      this.token=usuario.token;
    console.log(this.token)

     alert("el token es " + this.token);
    })}


}
