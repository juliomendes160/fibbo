import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
  }

  getProducts(): void{
    this.productService.getProducts().subscribe({
      next: (responseProducts) => {
        this.products = responseProducts;
      },
      error: (err) => {
        console.error('Erro ao adicionar produto', err);
      }
    });
  }

  updateProduct(updatedProduct: Product): void {
    this.productService.updateProduct(updatedProduct).subscribe({
      next: () => {
        this.products = this.products.map(product =>
          product.id === updatedProduct.id ? updatedProduct : product
        );
      },
      error: (err) => {
        console.error('Erro ao atualizar produto', err);
      }
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter(product => product.id !== id);
      },
      error: (err) => {
        console.error('Erro ao deletar produto', err);
      }
    });
  }
}
