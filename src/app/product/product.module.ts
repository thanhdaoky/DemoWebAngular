import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductInsertComponent } from './product-insert/product-insert.component';

const routes: Routes = [
  {
    path: 'product',
    children: [
      {
        path: '',
        redirectTo: '/product/list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'insert',
        component: ProductInsertComponent
      }
    ]
  }
];
@NgModule({
  declarations: [ProductListComponent, ProductInsertComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProductModule {}
