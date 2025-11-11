import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductList } from "./components/product-list/product-list";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [NgIf, NgFor, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title: string = "";
  counter: number = 0;
  isDisabled: boolean = false;
  product: any;
  productList: any[] = [];

  fillData() {
    this.title = "Proizvodi";
    this.product = {
      code: "12345",
      name: "Coca Cola",
      quantity: 20,
      price: 30
    };
    this.productList = [
      {
        code: "987654",
        name: "Fanta",
        quantity: 10,
        price: 40
      },
      {
        code: "456789",
        name: "Sprite",
        quantity: 15,
        price: 20
      }
    ]
  }
}
