import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comment } from './interfaces/news-portal.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/news`)
  }

  getNewsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/news/${id}`)
  }

  getComments(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comments`)
  }

  postComment(comment: Comment) {
    return this.http.post<any>(`${this.apiUrl}/comments`, comment)
  }

  postVariabilities(data: any) {
    return this.http.post<any>(`${this.apiUrl}/variabilities`, data)
  }
}
