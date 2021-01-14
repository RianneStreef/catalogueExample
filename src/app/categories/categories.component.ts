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

  @Input() boolValueDisplayCategory: boolean;
  @Input() categoryId: number;
  @Input() displayCategory: boolean;
  @Input() categoryIdToDisplay: number;

  @Output() categoryDisplayClicked: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();
  @Output() categorySet: EventEmitter<number> = new EventEmitter<number>();

  toggleCategoryDisplay(boolValueDisplayCategory) {
    console.log('toggleDisplayCategory clicked, value: ' + this.boolValueDisplayCategory);
    this.categoryDisplayClicked.emit(boolValueDisplayCategory);
  }


  setCategoryId (categoryId) {
    console.log('category to display: ' + this.categoryIdToDisplay);
    this.categorySet.emit(categoryId);
  }

  constructor() {}

  ngOnInit(): void {
  }

}
