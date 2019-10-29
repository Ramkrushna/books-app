import { Book } from './book';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiURL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } ;

  // Fetch book list
  getBooks(): Observable<Book> {
    return this.http.get<Book>(this.apiURL + '/books')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Fetch book
  getBook(id): Observable<Book> {
    return this.http.get<Book>(this.apiURL + '/books/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Create book
  createBook(book): Observable<Book> {
    return this.http.post<Book>(this.apiURL + '/books/', JSON.stringify(book), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Update book
  updateBook(id, book): Observable<Book> {
    return this.http.put<Book>(this.apiURL + '/books/' + id, JSON.stringify(book), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Delete book
  deleteBook(id) {
    return this.http.delete<Book>(this.apiURL + '/books/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error) {
    console.log('********************error while calling backend api****************');
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
