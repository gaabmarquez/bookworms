import { Injectable } from "@angular/core";
import { Book } from "./books.model";
import { of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class BooksService {
  books: Book[] = [
    new Book(
      "1",
      "Lean Startup",
      "Eric Ries",
      "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
      `Eric Ries is an entrepreneur and author of the popular blog Startup Lessons Learned. He co-founded and served as CTO of IMVU, his third startup,  and has had plenty of startup failures along the way. He is a frequent speaker at business events, has advised a number of startups, large companies, and venture capital firms on business and product strategy, and is an Entrepreneur-in-Residence at Harvard Business School. His Lean Startup methodology has been written about in the New York Times, the Wall Street Journal, the Harvard Business Review, the Huffington Post, and many blogs. He lives in San Francisco.`
    ),
    new Book(
      "2",
      "Zero To One",
      "Peter Thiel",
      "https://images-na.ssl-images-amazon.com/images/I/51JkDEpHUQL._SX317_BO1,204,203,200_.jpg"
    ),
    new Book(
      "3",
      "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future ",
      "Ashlee Vance",
      "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg"
    ),
    new Book(
      "4",
      "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future- THe fantastic book about cool stuff",
      "Ashlee Vance",
      "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg"
    )
  ];

  words = [
    {
      word: 'Amid',
      description: `  preposition
      surrounded by; in the middle of.
      "our dream home, set amid magnificent rolling countryside"`,
      pages: '1,2,10,25,66'
    },
    {
      word: 'Amid',
      description: `  preposition
      surrounded by; in the middle of.
      "our dream home, set amid magnificent rolling countryside"`,
      pages: '1,2,10,25,66'

    }, {
      word: 'Amid',
      description: `  preposition
      surrounded by; in the middle of.
      "our dream home, set amid magnificent rolling countryside"`,
      pages: '1,2,10,25,66'

    }, {
      word: 'Amid',
      description: `in the middle of or surrounded by:
    On the floor, amid mounds of books, were two small envelopes.
      The new perfume was launched amidst a fanfare of publicity.
      Synonym
      among`,
      pages: '1,2,10,25,66'

    }

  ]

  constructor() { }

  getBooks() {
    return of([...this.books]);
  }

  getBookById(bookId: string) {
    return of(this.books.find(book => book.id === bookId));
  }

  getWordsByBook(bookId) {
    return of(this.words)
  }
}
