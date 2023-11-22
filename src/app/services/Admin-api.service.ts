import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Book } from '../models/Book.model';

@Injectable({
  providedIn: 'root'
})
export class AdminAPIService {

  readonly API_URL = 'http://localhost:8081';

  constructor(
    private http: HttpClient
  ) { }

 
  getBooksAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/all-books`);
  }


  getUsers(): Observable<any[]> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<any[]>(`${this.API_URL}/all-users`, options);
  }


  getBooksById(idBook: number): Observable<Book> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<Book>(`${this.API_URL}/byBookId/${idBook}`, options);
  }
  createNewBook(book : any): Observable<Book> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.post<any>(`${this.API_URL}/add-new-book`, book, options);
  }
  
  updateBook(book: Book): Observable<string> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.put<string>(`${this.API_URL}/update/${book._idBook}$`, book, options);
  }

  deleteBook(idBook: number | null): Observable<string> {
    const options = {
      headers: this.getAuthHeader(),
      responseType: 'text' as 'json'
    };
    return this.http.delete<string>(`${this.API_URL}/delete-book/${idBook}`, options);
  }
  getReviews(idBook: number | null): Observable<any[]> {
    
    return this.http.get<any[]>(`${this.API_URL}/ReviewByBook/${idBook}`);
  }

  getRatings(idBook: number | null): Observable<any[]> {
  
    return this.http.get<any[]>(`${this.API_URL}/RatingByBook/${idBook}`);
  }

  private getAuthHeader(): HttpHeaders {
    // Get the token from the local storage
    const token: string | null = localStorage.getItem('authToken');
    if (token === null) {
      throw null;
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  

}
