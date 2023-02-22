import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';
import { MethodServiceService } from '../method-service.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  title : string =  "Acil" ; 
  listProdcut! : Product[];
  priceMax! : number ; 
  k=0;
  

    
  constructor(private serviceProduct : ProductServiceService, private calcul : MethodServiceService) { }

  ngOnInit(): void {
    this.listProdcut=this.serviceProduct.listProdcut;
    
  }
  buy(i:number) {
    if(this.listProdcut[i].quantity>0)
    this.listProdcut[i].quantity--;
   }
   like(i:number) {
    this.listProdcut[i].like++;
   }


   
   searchProducts(query : string ) {
      for (let i = 0; i<this.listProdcut.length ; i++) {

      console.log();
   }
  

}
calculquantity(){
   this.k=this.calcul.calculMethod(this.listProdcut,'quantity',0);
  
}
}
