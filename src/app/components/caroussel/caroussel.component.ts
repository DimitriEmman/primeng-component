import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ProductService } from 'src/app/services/productservice';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent implements OnInit {

  products!: Product[];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.productService.getProducts().then((data: Product[]) => this.products = data);

      this.sortOptions = [
          {label: 'Price High to Low', value: '!price'},
          {label: 'Price Low to High', value: 'price'}
      ];

      this.primengConfig.ripple = true;
  }
  
  onSortChange(event:any) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }
}
