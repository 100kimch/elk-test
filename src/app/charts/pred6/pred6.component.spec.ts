import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pred6Component } from './pred6.component';

describe('Pred6Component', () => {
  let component: Pred6Component;
  let fixture: ComponentFixture<Pred6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pred6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pred6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
