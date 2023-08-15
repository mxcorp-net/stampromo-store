import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-list-horizontal',
  templateUrl: './product-list-horizontal.component.html',
  styleUrls: ['./product-list-horizontal.component.css']
})
export class ProductListHorizontalComponent implements OnInit {

  @Output() childEvent = new EventEmitter<number>();
  @Input() objet: any;
  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(id: number) {
    this.childEvent.emit(id);
  }

}
