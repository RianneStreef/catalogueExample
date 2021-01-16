import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "item";
import { ITEMS } from 'items';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {

  items: Item[] = ITEMS;


  @Input() boolValueDisplayCategory: boolean;
  @Input() categoryId: number;
  @Input() displayCategory: boolean;
  @Input() categoryToDisplay: string;
  @Input() displayCategoryProducts: boolean;
  @Input() displayProductDetails : boolean;


  @Output() categoryDisplayClicked: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();
  @Output() categorySet: EventEmitter<number> = new EventEmitter<number>();

  toggleCategoryDisplay(boolValueDisplayCategory) {
    console.log('toggleDisplayCategory clicked, value: ' + this.boolValueDisplayCategory);
    this.categoryDisplayClicked.emit(boolValueDisplayCategory);
  }
  
  openDetailPage(){
    this.displayCategoryProducts = false;
    console.log('display categories? ' + this.displayCategoryProducts)
    this.displayProductDetails = true;

  }
  constructor() {

   }

  ngOnInit(): void {
    console.log('category to display: ' + this.categoryToDisplay);
    console.log('item.type = ' + this.items[3].itemTitle);
    console.log(this.items);
  }

}
