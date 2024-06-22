import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductComponent } from './components/product/product.component';
import { PagemissingComponent } from './components/pagemissing/pagemissing.component';
import { CartComponent } from './components/cart/cart.component';
import { CategorydetailComponent } from './components/categorydetail/categorydetail.component';
export const routes: Routes = [
    {
        path:'',
        component: DashboardComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent,
        
    },
    {
        path: 'catdetails/:cat',
        component: CategorydetailComponent
    },
    {
        path : 'products/:id',
        component: ProductComponent,
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '**',
        component: PagemissingComponent
    }

];
