import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @Input() removeMessage;

  public imagePath;
  // @Input() imgURL: any;

  imgURLValue;
  @Output() imgURLChange = new EventEmitter<any>();

  @Input()
  get imgURL() {
    return this.imgURLValue;
  }

  set imgURL(val) {
    console.log('setted to', val)
    this.imgURLValue = val;
    this.imgURLChange.emit(this.imgURLValue);
  }



  message;

  constructor(private http: HttpClient) { }

  ngOnInit() {
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

  onRemove() {
    console.log(this.imgURL)

    this.imgURL = undefined;
    console.log(this.imgURL)
  }
}
