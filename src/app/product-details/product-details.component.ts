import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: Iproduct;
  @Output() buy = new EventEmitter();

  buyButtonClicked(product: Iproduct) {
    this.buy.emit();
  }

}
