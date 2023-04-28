import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
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

}
