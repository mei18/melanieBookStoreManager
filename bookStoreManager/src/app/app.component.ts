import { Component } from '@angular/core';
import { Book } from './models/book';
import { Category } from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [new Book()];
  categories = [new Category()];

  receivedBook(book) {
    this.books.push(book);
  }

  receivedCategory(category) {
    this.categories.push(category);
  }

}
