import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Output() childEvent = new EventEmitter<number>();
  @Input() objet: any;
  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(id: number) {
    this.childEvent.emit(id);
  }

}
