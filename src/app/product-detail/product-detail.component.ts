import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/model/Product';
import { MethodServiceService } from '../method-service.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
id! : number ; 

listProdcut! : Product[];

  constructor(private route  : ActivatedRoute , private serviceProduct : ProductServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.listProdcut = this.serviceProduct.listProdcut;

  }
  
   


}
