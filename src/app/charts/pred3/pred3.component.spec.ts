import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pred3Component } from './pred3.component';

describe('Pred3Component', () => {
  let component: Pred3Component;
  let fixture: ComponentFixture<Pred3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pred3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pred3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
