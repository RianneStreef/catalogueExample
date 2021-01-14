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
  @Input() categoryIdToDisplay: number;

  @Output() categoryDisplayClicked: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();
  @Output() categorySet: EventEmitter<number> = new EventEmitter<number>();

  toggleCategoryDisplay(boolValueDisplayCategory) {
    console.log('toggleDisplayCategory clicked, value: ' + this.boolValueDisplayCategory);
    this.categoryDisplayClicked.emit(boolValueDisplayCategory);
  }

  // setCategoryId (categoryId) {
  //   this.categoryIdToDisplay.emit(this.categoryId);
  // }

  // re-add to main-menu template
  // (categorySet)="setCategoryId($event)" 


  constructor() { }

  ngOnInit(): void {
  }

}
