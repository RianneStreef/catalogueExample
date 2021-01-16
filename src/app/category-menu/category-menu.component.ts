import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITEMS } from 'items';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {

  items = ITEMS;

  // for let item of items
  // filterargs = {item.type = 'balls'}


  @Input() boolValueDisplayCategory: boolean;
  @Input() categoryId: number;
  @Input() displayCategory: boolean;
  @Input() categoryIdToDisplay: string;

  @Output() categoryDisplayClicked: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();
  @Output() categorySet: EventEmitter<number> = new EventEmitter<number>();

  toggleCategoryDisplay(boolValueDisplayCategory) {
    console.log('toggleDisplayCategory clicked, value: ' + this.boolValueDisplayCategory);
    this.categoryDisplayClicked.emit(boolValueDisplayCategory);
  }
  

  constructor() {
    console.log('category to display: ' + this.categoryIdToDisplay);
   }

  ngOnInit(): void {
  }

}
