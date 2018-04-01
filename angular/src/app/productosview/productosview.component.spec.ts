import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosviewComponent } from './productosview.component';

describe('ProductosviewComponent', () => {
  let component: ProductosviewComponent;
  let fixture: ComponentFixture<ProductosviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
