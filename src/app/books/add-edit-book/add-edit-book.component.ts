import { Book } from './../books.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.scss']
})
export class AddEditBookComponent implements OnInit {
  closeResult: string;
  isEdit = false;
  public imagePath;
  imgURL: any;
  public message: string;
  @ViewChild('content', { static: false }) content;

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  bookName = '';
  bookAuthor = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.fileInput);
  }

  open(book?: Book) {
    if (book) {
      this.isEdit = true;
      this.bookAuthor = book.author;
      this.bookName = book.name;
    } else {
      // this.book = new Book('temp', '', '', '');
    }
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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


  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


}
