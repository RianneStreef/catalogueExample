import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../categories';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;

  @Input() displayCategory: boolean;

  @Output() categoryDisplayClicked: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();
  @Output() categorySet: EventEmitter<number> = new EventEmitter<number>();

  toggleCategoryDisplay(boolValueDisplayCategory) {
    console.log('toggleDisplayCategory clicked, value: ' + boolValueDisplayCategory);
    //this.categoryDisplayClicked.emit(boolValueDisplayCategory);
    this.displayCategory = boolValueDisplayCategory;
  }


  setCategoryId (categoryId) {
    console.log('category to display: ' + categoryId);
    this.categorySet.emit(categoryId);
  }

  constructor() {}

  ngOnInit(): void {
  }

}
