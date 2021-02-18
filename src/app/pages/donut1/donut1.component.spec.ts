import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Donut1Component } from './donut1.component';

describe('Donut1Component', () => {
  let component: Donut1Component;
  let fixture: ComponentFixture<Donut1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Donut1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Donut1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
