import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../models/interfaces/post-response.interface';

const POST = 'post';
const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  postBaseUrl = `${environment.API_BASE_URL}${POST}`;

  findAllPosts(): Observable<PostResponse> {
    let encabezados= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
    })
    return this.http.get<PostResponse>(`${this.postBaseUrl}/all`, { headers: encabezados });
  }
}
