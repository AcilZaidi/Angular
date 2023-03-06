import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  prod!: Product;
  constructor() { }

  ngOnInit(): void {
    
  }

}
