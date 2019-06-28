import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import {AddBookComponent} from './add-book/add-book.component';

const routes: Routes = [
  { path: 'allBooks', component: BooksComponent },
  { path: 'addBook', component: AddBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
