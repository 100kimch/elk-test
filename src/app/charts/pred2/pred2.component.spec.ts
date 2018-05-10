import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pred2Component } from './pred2.component';

describe('Pred2Component', () => {
  let component: Pred2Component;
  let fixture: ComponentFixture<Pred2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pred2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pred2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
