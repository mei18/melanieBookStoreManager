import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';
import { Category } from '../models/category';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book;

  constructor() { }

  ngOnInit() {
  }

}
