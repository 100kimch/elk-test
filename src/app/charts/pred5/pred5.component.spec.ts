import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pred5Component } from './pred5.component';

describe('Pred5Component', () => {
  let component: Pred5Component;
  let fixture: ComponentFixture<Pred5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pred5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pred5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
