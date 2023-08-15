import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../../_models/product.model";
import {ProductService} from "../../../_services/product.service";
import { ActivatedRoute, Params } from '@angular/router';

class Subscription {
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id :string = "";
  objectProduct: any; //
  subscription: Subscription | undefined;

  constructor(private productServices: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.subscription = this.productServices.find(this.id)?.subscribe(
      (data: ProductModel) => {
        this.objectProduct = data
        console.log(data)
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
