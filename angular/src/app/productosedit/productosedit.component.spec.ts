import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoseditComponent } from './productosedit.component';

describe('ProductoseditComponent', () => {
  let component: ProductoseditComponent;
  let fixture: ComponentFixture<ProductoseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
