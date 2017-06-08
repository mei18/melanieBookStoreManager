import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() books;

  constructor() { }

  ngOnInit() {
  }

}
