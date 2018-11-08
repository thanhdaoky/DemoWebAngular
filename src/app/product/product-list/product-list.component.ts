import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  product: Product[] = [];
  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.getUser().subscribe(res => (this.product = res));
  }
}
