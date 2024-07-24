import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product(0, '', '', 0);

  constructor(private productService: ProductService) { }

  ngOnInit(): void { }

  addProduct(): void {
    this.productService.addProduct(this.product).subscribe({
      next: () => {
        this.product = new Product(0, '', '', 0)
      },
      error: (err) => {
        console.error('Erro ao adicionar produto', err);
      }
    });
  }
}
