import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list-horizontal',
  templateUrl: './product-list-horizontal.component.html',
  styleUrls: ['./product-list-horizontal.component.css']
})
export class ProductListHorizontalComponent implements OnInit {

  @Input() objet: any;
  constructor() { }

  ngOnInit(): void {
  }

}
