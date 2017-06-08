import { Component } from '@angular/core';
import { Book } from './models/book';
import { Category } from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [new Book('B001', '100 Años de Soledad', 'Gabriel García Marquez', 'Novels', 50),
  new Book('B002', 'La Cegua', 'María Gomez', 'Mistery', 45)];
  categories = [new Category('C001', 'Novels'), new Category('C002', 'Mistery')];

  receivedBook(book) {
    this.books.push(book);
  }

  receivedCategory(category) {
    this.categories.push(category);
  }

}
