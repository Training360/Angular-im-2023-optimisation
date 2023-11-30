import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page/dashboard/dashboard.component').then(
      m => m.DashboardComponent
    ),
  },
  {
    path: 'dashboard',
    redirectTo: '',
  },
  {
    path: 'products',
    loadComponent: () => import('./page/product/product.component').then(
      m => m.ProductComponent
    ),
  },
  {
    path: 'product/edit/:id',
    loadComponent: () => import('./page/product-editor/product-editor.component').then(
      m => m.ProductEditorComponent
    ),
  },
  {
    path: 'customers',
    loadComponent: () => import('./page/customer/customer.component').then(
      m => m.CustomerComponent
    ),
  },
  {
    path: 'customer/edit/:id',
    loadComponent: () => import('./page/customer-editor/customer-editor.component').then(
      m => m.CustomerEditorComponent
    ),
  },
  {
    path: 'login',
    loadComponent: () => import('./page/login/login.component').then(
      m => m.LoginComponent
    ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
