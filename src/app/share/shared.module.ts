import { TrimPipe } from './trim.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload/image-upload.component';



@NgModule({
  declarations: [TrimPipe, ImageUploadComponent],
  imports: [
    CommonModule
  ],
  exports: [TrimPipe, ImageUploadComponent]
})
export class SharedModule { }
