import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product(0, '', '', 0);

  constructor(private productService: ProductService) { }

  ngOnInit(): void { }

  addProduct() {
    this.productService.addProduct(this.product);
    this.product = new Product(0, '', '', 0);
  }
}
