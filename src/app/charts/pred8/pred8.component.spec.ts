import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pred8Component } from './pred8.component';

describe('Pred8Component', () => {
  let component: Pred8Component;
  let fixture: ComponentFixture<Pred8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pred8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pred8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
