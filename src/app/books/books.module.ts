import { TrimPipe } from "./../share/trim.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books/books.component";
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AddEditBookComponent } from './add-edit-book/add-edit-book.component';
import { NgbModalModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksComponent, BookDetailComponent, TrimPipe, AddEditBookComponent],
  imports: [CommonModule, BooksRoutingModule, NgbModalModule, NgbDatepickerModule, FormsModule]
})
export class BooksModule { }
