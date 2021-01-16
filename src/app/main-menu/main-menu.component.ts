import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Input() boolValueDisplayCategory: boolean;
  @Input() categoryId: number;
  @Input() displayCategory: boolean;
  @Input() categoryToDisplay: number;
  @Input() displayCategoryProducts: boolean;
  @Input() productToDisplay: number;
  @Input() displayProductDetails : boolean;

  @Output() categoryDisplayClicked: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();
  @Output() categorySet: EventEmitter<number> = new EventEmitter<number>();

  toggleCategoryDisplay(boolValueDisplayCategory) {
    console.log('toggleDisplayCategory clicked, value: ' + this.boolValueDisplayCategory);
    this.categoryDisplayClicked.emit(boolValueDisplayCategory);
  }

  setCategoryId (categoryId) {
    this.categoryToDisplay = categoryId;

    console.log('category to display: ' + this.categoryToDisplay);
    // this.displayCategory = true;
    this.categorySet.emit(categoryId);
  }

 


  constructor() {}

  ngOnInit(): void {
    console.log('product to display ' + this.productToDisplay)
    console.log('category ' + this.categoryToDisplay) 
  }

}
