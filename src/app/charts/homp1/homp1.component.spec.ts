import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homp1Component } from './homp1.component';

describe('Homp1Component', () => {
  let component: Homp1Component;
  let fixture: ComponentFixture<Homp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
