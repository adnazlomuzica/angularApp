import { NgFor, NgIf, NgClass, NgStyle, UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, DecimalPipe, CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductList } from "./components/product-list/product-list";
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, DecimalPipe, CurrencyPipe, SlicePipe, FormsModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
   
  products: any[]=[
    {code:'A1-23', name:'Coca Cola', price: 3, discount:false, quantity: 10, description: "Coca Cola je gazirano pice!", image:'https://www.coca-cola.com/content/dam/onexp/ba/bs/products/coca-cola/cc500.png'},
    {code:'A2-34', name:'Milka Cokolada', price: 6, discount:true, quantity:2, description: "Oreo cokolada!", image:'https://m.media-amazon.com/images/I/713xxkHtGiL._AC_UF894,1000_QL80_.jpg'},
    {code:'A3-45', name:'Kinder Cokolada', price: 2.5, discount:false, quantity:0, description: "Kinder cokolada!", image:'https://d17zv3ray5yxvp.cloudfront.net/variants/dAba6tW1MiHGAxFaWZkZ1dAj/51b8aa181ad15015651703a4356668224748770ff8b1ba318f5b3051f549af07'},
    {code:'A4-56', name:'Kinder Bueno', price: 4, discount:true, quantity:20, description: "Kinder Bueno cokolada!", image:'https://isplatise.ba/wp-content/uploads/2023/06/Kinder-Bueno.jpg'},
  ];
  nameColor:string="blue";
  descriptionWidth:number=100;
  isDisabled:boolean=false;
  today:any=new Date();
  productName:string="Coca Cola";
  selectedType:number=3;
  selectedTypeName:string="";
  isLoggedIn:boolean=true;

  constructor(private router: Router){}

  ngOnInit() {
    console.log("KOMPONENTA KREIRANA!");
  }

  onInput(name: any){
  }

  onKeyUp(){
    console.log("Enter pozvan!!");
  }

  onMouseEnter(event:any){
    console.log("Mouse entered chat");
  }

  onDoubleClick(event:any){
    console.log("Desio se dupli klik na element");
  }

  onRightClick(event:any){
    console.log("Kliknut desni klik!");
  }

  openProductsOrLogin(){
    if(this.isLoggedIn)
      this.router.navigate(["products"]);
    else
      this.router.navigate(["login"]);
  }
}
