import { Book } from "./books.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"]
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    new Book(
      1,
      "Lean Startup",
      "Eric Ries",
      "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
    ),
    new Book(
      2,
      "Zero To One",
      "Peter Thiel",
      "https://images-na.ssl-images-amazon.com/images/I/51JkDEpHUQL._SX317_BO1,204,203,200_.jpg"
    ),
    new Book(
      3,
      "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future ",
      "Ashlee Vance",
      "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg"
    ),
    new Book(
      4,
      "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future- THe fantastic book about cool shit nigga",
      "Ashlee Vance",
      "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {
    this.books = this.books.concat(this.books.concat(this.books));
  }
}
