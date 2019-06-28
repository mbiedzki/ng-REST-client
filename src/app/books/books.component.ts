import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { MessageService} from '../message.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  books: Book[];
  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books.sort((a, b) => a.id - b.id));
  }

  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book).subscribe();
    this.messageService.displayMessage('Book has been deleted');
  }

  constructor(
    private bookService: BookService,
    public  messageService: MessageService) { }

  ngOnInit() {
    this.getBooks();
  }

}
