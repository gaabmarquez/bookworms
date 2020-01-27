import { BooksService } from "../books.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"]
})
export class BooksComponent implements OnInit {
  books = [];
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(resp => this.books = resp)

  }
}
