import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() displayCategoryProducts: number;
  @Input() productToDisplay: number;

  constructor() {
    console.log(this.productToDisplay)

   }

  ngOnInit(): void {
  }

}
