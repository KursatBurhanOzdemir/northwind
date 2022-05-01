import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product';

import { productResponseModel } from '../../models/productResposeModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  

  constructor(private productService:ProductService ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
   this.productService.getProducts().subscribe(Response=>{
     this.products=Response.data;
     this.dataLoaded=true;
   });
  }
}
