import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthAdminGuard } from '../auth/guards-services/auth-admin.service';

const routes: Routes = [
  {path:'', component:AdminComponent,
children:[
  {
    path:"categories",
    loadChildren:()=> import('./admin/categories/categories.module').then(m=>m.CategoriesModule),
  },
  {
    path:"",
    loadChildren:()=> import('./admin/categories/categories.module').then(m=>m.CategoriesModule),
  },
    // {
  //   path:"",
  //   redirectTo: 'categories',
  //   pathMatch: 'full'
  // },
  {
    path:"products",
    loadChildren:()=> import('./admin/products/products.module').then(m=>m.ProductsModule),
  },
  {
    path:"newsletters",
    loadChildren:()=> import('./admin/newsletters/newsletters.module').then(m=>m.NewslettersModule),
  }

], canActivate: [AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
