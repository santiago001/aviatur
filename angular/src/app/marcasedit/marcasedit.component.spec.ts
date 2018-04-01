import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaseditComponent } from './marcasedit.component';

describe('MarcaseditComponent', () => {
  let component: MarcaseditComponent;
  let fixture: ComponentFixture<MarcaseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
