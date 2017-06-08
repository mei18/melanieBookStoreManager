import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book';
import { Category } from '../models/category';

@Component({
  selector: 'app-book-admin',
  templateUrl: './book-admin.component.html',
  styleUrls: ['./book-admin.component.css']
})
export class BookAdminComponent implements OnInit {
  @Output() sendBook = new EventEmitter();

  bookId = 'bookId';
  bookName = 'bookName';
  author = 'author';
  bookCategory = 'bookCategory';
  price = 'price';

  constructor() { }
  ngOnInit() { }

  addBook() {
    this.sendBook.emit(new Book(this.bookId, this.bookName, this.author, this.bookCategory, this.price));
    this.bookId = 'bookId';
    this.bookName = 'bookName';
    this.author = 'author';
    this.bookCategory = 'bookCategory';
    this.price = 'price';
  }

  createBookId(event) {
    this.bookId = event.target.value;
  }
  createBookName(event) {
    this.bookName = event.target.value;
  }
  createBookAuthor(event) {
    this.author = event.target.value;
  }
  createCategory(event) {
    this.bookCategory = event.target.value;
  }
  createBookPrice(event) {
    this.price = event.target.value;
  }
}
