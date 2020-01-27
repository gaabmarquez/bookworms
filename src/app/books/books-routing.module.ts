import { BookDetailComponent } from './book-detail/book-detail.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "./books/books.component";

const routes: Routes = [
  { path: "", component: BooksComponent },
  {path: ":id", component: BookDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
