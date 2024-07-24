import { Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/add-product', pathMatch: 'full' },
  { path: 'add-product', component: ProductFormComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: '**', redirectTo: '/add-product' }
];
