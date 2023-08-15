import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../_models/product.model";
import {ProductService} from "../../_services/product.service";
import {Observable} from "rxjs";
declare var $: any;

class Subscription {
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  objectProduct: ProductModel[] = []; //
  subscription: Subscription | undefined;
  modalProduct: ProductModel = new ProductModel();

  constructor(private productServices: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productServices.where({}).subscribe(
      (data: ProductModel[]) => {
        this.objectProduct = data; // Asignar los datos recibidos a objectProduct
      },
      (error) => {
        console.error(error);
      }
    );


    let sliderrange = $('#slider-range');
    let amountprice = $('#amount');
    $(function() {
      sliderrange.slider({
        range: true,
        min: 16,
        max: 400,
        values: [0, 300],
        slide: function(event: any, ui: any) {
          amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
      });
      amountprice.val("$" + sliderrange.slider("values", 0) +
        " - $" + sliderrange.slider("values", 1));
    });
  }

  onChildEvent(id: number) {
    console.log('ID recibido del componente hijo:', id);

    this.subscription = this.productServices.find(id.toString())?.subscribe(
      (data: ProductModel) => {
        this.modalProduct = data
        this.modalProduct.price = Number(this.modalProduct.price);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
