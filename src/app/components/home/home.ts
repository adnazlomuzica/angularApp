import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [DatePipe, FormsModule, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  today:any=new Date();
  productName:string="Coca Cola";
  selectedType:number=3;
  selectedTypeName:string="";
  productTypeList:any[]=[
    {id:1, name:"Cokolada"},
    {id:2, name:"Piće"},
    {id:3, name:"Jelo"},
    {id:4, name:"Bombone"}
  ];

  changeProductName(){
    console.log(this.productName);
  }

  changeProductType(){
    for(var i=0;i<this.productTypeList.length;i++){
      if(this.selectedType==this.productTypeList[i].id)
        this.selectedTypeName=this.productTypeList[i].name;
    }
  }
}
