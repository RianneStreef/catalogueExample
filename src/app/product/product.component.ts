import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() displayCategoryProducts: number;
  @Input() productToDisplay: number;
  @Input() displayProductDetails : boolean;


  constructor() {
    console.log("product to display " + this.productToDisplay)

   }

  ngOnInit(): void {
  }

}
