import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductList } from './components/product-list/product-list';
import { AboutUs } from './components/about-us/about-us';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path:'products', component:ProductList},
    {path:'about-us', component: AboutUs},
    {path:'', redirectTo:'home', pathMatch:'full'}
];
