import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { OffresEmploisComponent } from './offres-emplois/offres-emplois.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';


const routes: Routes = [ 
  {path : '' , redirectTo : 'articles' , pathMatch : 'full' },
  {path : 'products/:id' , component : ProductDetailComponent},
  {path : 'addProduct' , component : AddProductComponent},
  { path: 'products', component: ProductsComponentComponent },
  { path: 'offres', component: OffresEmploisComponent },
  {path :'templateDrivenForm' , component:TemplateDrivenFormComponentComponent},
{ path : '**' ,component :  NotFountComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
