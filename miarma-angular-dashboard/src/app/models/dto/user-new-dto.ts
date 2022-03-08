export class UserNewDto {
  nick: string;
  name: string;
  lastname: string;
  email:    string;
  tipocuenta: string;
  password: string;
  password2: string;
  datebirth:   Date;

  constructor() {
    this.nick = '';
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.tipocuenta = '';
    this.password = '';
    this.password2 = '';
    this.datebirth = new Date();

  }

}
