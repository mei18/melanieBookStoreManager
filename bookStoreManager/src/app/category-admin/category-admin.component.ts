import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {
  @Output() sendCategory = new EventEmitter();

  categoryId = 'categoryId';
  categoryName = 'categoryName';

  constructor() { }

  ngOnInit() {
  }

  addCategory() {
    this.sendCategory.emit(new Category(this.categoryId, this.categoryName));
    this.categoryId = 'categoryId';
    this.categoryName = 'categoryName';
  }

  createCategoryId(event) {
    this.categoryId = event.target.value;
  }
  createCategoryName(event) {
    this.categoryName = event.target.value;
  }
}
