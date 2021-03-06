import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../categories';
import { ITEMS } from 'items';
import { Item } from 'item';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;
  // items: Item[] = ITEMS;

  @Input() boolValueDisplayCategory: boolean;
  @Input() categoryId: number;
  @Input() displayCategory: boolean;
  @Input() categoryToDisplay: string;

  @Output() categoryDisplayClicked: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();
  @Output() categorySet: EventEmitter<number> = new EventEmitter<number>();



  setCategoryId (categoryId) {
    console.log('setting category id')
    this.categoryToDisplay = categoryId;
    console.log('category to display: ' + this.categoryToDisplay);
    this.displayCategory = true;
    console.log('toggleDisplayCategory clicked, value: ' + this.boolValueDisplayCategory);
    this.categoryDisplayClicked.emit();
    this.categorySet.emit(categoryId);

  }

  constructor() {}

  ngOnInit(): void {
  }

}
