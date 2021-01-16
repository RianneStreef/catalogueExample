import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() boolValueDisplayCategory: boolean;
  @Input() categoryId: string;
  @Input() boolValueDisplayProducts: boolean;

  displayCategory = false;
  categoryToDisplay = 'Balls';
  displayCategoryProducts = false;
  productToDisplay = 1;

  toggleCategoryDisplay(boolValueDisplayCategory : boolean | null) {
    console.log('displayCategory value is ' + this.displayCategory);

    if (boolValueDisplayCategory === true) {
      this.displayCategory = true;
    }
    else if (boolValueDisplayCategory === false) {
      this.displayCategory = false;
    }
    else {
      this.displayCategory = !this.displayCategory;
    }
    }

    setCategoryId (categoryId : string) {
      this.categoryToDisplay = categoryId;
      console.log('category to display ' + this.categoryToDisplay);
    }

}
