import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product/product.component';
export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'ProductList',
    component: ProductListComponent,
  },
  {
    path: 'Product/:id',
    component: ProductComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
