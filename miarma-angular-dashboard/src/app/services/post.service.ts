import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../models/interfaces/post-response.interface';

const POST = 'post';
const TOKEN = 'token';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  postBaseUrl = `${environment.API_BASE_URL}${POST}`;

  findAllPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.postBaseUrl}/all`, DEFAULT_HEADERS);
  }
}