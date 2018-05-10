import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pred1Component } from './pred1.component';

describe('Pred1Component', () => {
  let component: Pred1Component;
  let fixture: ComponentFixture<Pred1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pred1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pred1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
