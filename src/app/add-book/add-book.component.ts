import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books: Book[];
  addBook(title: string, author: string, category: string, format: string): void {
    title = title.trim();
    author = author.trim();
    category = category.trim();
    format = format.trim();
    if (!title || !author || !category || !format) {
      this.messageService.displayMessage('Please fill in all fields');
      return; }
    this.bookService.addBook({ title, author, category, format } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
    this.messageService.displayMessage('Book has been added');
  }

  constructor(
    private bookService: BookService,
    private messageService: MessageService
    ) { }

  ngOnInit() {}

}
