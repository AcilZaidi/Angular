import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Product } from '../core/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {
url : string="http://localhost:3000/products"
  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<Product[]>("http://localhost:3000/products");
  }
  addProduct(product : Product){
    return this.http.post("http://localhost:3000/products",product);
  }
  deleteProduct(id : number){
    return this.http.delete( this.url + "/" + id)
  }
}
