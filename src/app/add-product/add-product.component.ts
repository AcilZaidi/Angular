import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/model/Product';
import { ConsumerProductService } from '../services/consumer-product.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Product;
  constructor(private serviceProduct : ProductServiceService , private route : Router,private consumerProduct : ConsumerProductService) { }

  ngOnInit(): void {
    this.product=new Product();
   
  }

  ajouter(){
    //this.serviceProduct.addProduct(this.product);
    //this.route.navigateByUrl("/products");
    this.consumerProduct.addProduct(this.product).subscribe({
      next:()=>this.route.navigateByUrl('/products')
    })
  }
}
