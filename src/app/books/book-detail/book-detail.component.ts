import { AddEditBookComponent } from './../add-edit-book/add-edit-book.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BooksService } from './../books.service';
import { Book } from './../books.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  bookId: string;
  words;

  @ViewChild('bookModal', { static: false }) bookModal: AddEditBookComponent;

  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get("id")
    this.booksService.getBookById(this.bookId).subscribe(resp => this.book = resp);
    this.booksService.getWordsByBook(this.bookId).subscribe(resp => this.words = resp);

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  onEditBook() {
    this.bookModal.open(this.book);
  }
}
