import { Component, OnInit, Output } from '@angular/core';
import { pipe } from 'rxjs';
import { map, filter} from 'rxjs/operators';
import { ProductService } from 'src/app/product-service/product.service';
import { IProduct } from '../product';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output() pageTitle: string = "Product List";
  products: IProduct[] = [];
  errorMessage : string = "";

  showImage : boolean = false;
  filteredProducts: IProduct[] = [];

  set listFilter (value: string ) {
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy : string) : IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => 
    product.productName.toLowerCase().includes(filterBy));
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next : products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error : err => this.errorMessage = err,
    });
  }

  showImages() {
    this.showImage = !this.showImage;  
  }

  onNotify(title : string): void{
   this.pageTitle = title;
  }

}
