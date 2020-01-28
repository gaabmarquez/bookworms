import { Book } from './../books.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.scss']
})
export class AddEditBookComponent implements OnInit {
  closeResult: string;
  isEdit = false;
  public message: string;
  @ViewChild('content', { static: false }) content;

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  modal;
  bookName = '';
  bookAuthor = '';
  imgUrl;
  book;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.fileInput);
  }

  open(book?: Book) {
    if (book) {
      this.book = book;
      this.isEdit = true;
      this.bookAuthor = book.author;
      this.bookName = book.name;
      this.imgUrl = book.img;
    } else {
      // this.book = new Book('temp', '', '', '');
    }
    this.modal = this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  fuc() {
    console.log('shit', this.imgUrl)
  }

}
