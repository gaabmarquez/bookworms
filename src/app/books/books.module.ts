import { TrimPipe } from "./../share/trim.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books.component";
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [BooksComponent, BookDetailComponent, TrimPipe],
  imports: [CommonModule, BooksRoutingModule]
})
export class BooksModule {}
