import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pred4Component } from './pred4.component';

describe('Pred4Component', () => {
  let component: Pred4Component;
  let fixture: ComponentFixture<Pred4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pred4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pred4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
