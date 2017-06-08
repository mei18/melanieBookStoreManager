import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() categories;

  constructor() { }

  ngOnInit() {
  }

}
