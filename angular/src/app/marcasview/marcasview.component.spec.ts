import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasviewComponent } from './marcasview.component';

describe('MarcasviewComponent', () => {
  let component: MarcasviewComponent;
  let fixture: ComponentFixture<MarcasviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
