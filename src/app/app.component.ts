import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() boolValueDisplayCategory: boolean;
  @Input() categoryId: number;

  displayCategory = true;
  categoryIdToDisplay = 1;

  toggleCategoryDisplay(boolValueDisplayCategory : boolean | null) {
    if (boolValueDisplayCategory === true) {
      this.displayCategory = true;
    }
    else if (boolValueDisplayCategory === false) {
      this.displayCategory = false;
    }
    else {
      this.displayCategory = !this.displayCategory;
    }
    console.log('displayCategory value is ' + this.displayCategory);
    }

    setCategoryId (categoryId : number) {
      this.categoryIdToDisplay = categoryId;
      console.log('category to display ' + this.displayCategory);
    }

}
