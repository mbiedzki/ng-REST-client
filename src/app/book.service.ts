import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService} from './message.service';
import { Book } from './book';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private serverAddress = 'https://biedzki.pl/library-1.0/books/';

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.serverAddress)
      .pipe(
        catchError(this.handleError<Book[]>('getBooks', []))
      );
  }
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.serverAddress, book, httpOptions).pipe(
      catchError(this.handleError<Book>('addBook'))
    );
  }

  deleteBook(book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.serverAddress}${id}`;

    return this.http.delete<Book>(url, httpOptions).pipe(
      catchError(this.handleError<Book>('deleteBook'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.messageService.displayMessage('client-server error');
      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(
    private http: HttpClient,
    public messageService: MessageService
  ) { }
}
