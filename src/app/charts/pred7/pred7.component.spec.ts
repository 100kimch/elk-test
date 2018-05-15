import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pred7Component } from './pred7.component';

describe('Pred7Component', () => {
  let component: Pred7Component;
  let fixture: ComponentFixture<Pred7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pred7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pred7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
