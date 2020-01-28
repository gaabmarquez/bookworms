import { BooksService } from "../books.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AddEditBookComponent } from '../add-edit-book/add-edit-book.component';

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"]
})
export class BooksComponent implements OnInit {
  books = [];

  @ViewChild('bookModal', { static: false }) bookModal: AddEditBookComponent;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(resp => this.books = resp)

  }

  onAddBook() {
    console.log(this.bookModal)
    this.bookModal.open();
  }
}
