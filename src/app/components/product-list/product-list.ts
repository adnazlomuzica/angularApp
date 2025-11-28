import { DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, DecimalPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  products: any[]=[
    {code:'A1-23', name:'Coca Cola', price: 3, discount:false, quantity: 10, description: "Coca Cola je gazirano pice!", image:'https://www.coca-cola.com/content/dam/onexp/ba/bs/products/coca-cola/cc500.png'},
    {code:'A2-34', name:'Milka Cokolada', price: 6, discount:true, quantity:2, description: "Oreo cokolada!", image:'https://m.media-amazon.com/images/I/713xxkHtGiL._AC_UF894,1000_QL80_.jpg'},
    {code:'A3-45', name:'Kinder Cokolada', price: 2.5, discount:false, quantity:0, description: "Kinder cokolada!", image:'https://d17zv3ray5yxvp.cloudfront.net/variants/dAba6tW1MiHGAxFaWZkZ1dAj/51b8aa181ad15015651703a4356668224748770ff8b1ba318f5b3051f549af07'},
    {code:'A4-56', name:'Kinder Bueno', price: 4, discount:true, quantity:20, description: "Kinder Bueno cokolada!", image:'https://isplatise.ba/wp-content/uploads/2023/06/Kinder-Bueno.jpg'},
  ];
}
