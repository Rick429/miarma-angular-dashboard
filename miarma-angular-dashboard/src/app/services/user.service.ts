import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../models/interfaces/user-response.interface';

const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<UserResponse> {
    let encabezados= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
    })
    return this.http.get<UserResponse>(`${environment.API_BASE_URL}all`, { headers: encabezados });
  }

  giveAdmin(id:number){
    let encabezados= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
    });
    return this.http.put(`${environment.API_BASE_URL}giveadmin/${id}`,null, { headers: encabezados });
  }
}
