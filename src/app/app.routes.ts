import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductList } from './components/product-list/product-list';
import { AboutUs } from './components/about-us/about-us';
import { NotFound } from './components/not-found/not-found';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path:'products', component:ProductList},
    {path:'login', component: AboutUs},
    {path:'product/:id', component: ProductDetails},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'**', redirectTo:'home'} 
];
