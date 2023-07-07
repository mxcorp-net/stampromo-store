import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListHorizontalComponent } from './product-list-horizontal.component';

describe('ProductListHorizontalComponent', () => {
  let component: ProductListHorizontalComponent;
  let fixture: ComponentFixture<ProductListHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
