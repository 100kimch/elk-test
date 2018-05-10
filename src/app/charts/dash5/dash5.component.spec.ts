import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dash5Component } from './dash5.component';

describe('Dash5Component', () => {
  let component: Dash5Component;
  let fixture: ComponentFixture<Dash5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dash5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dash5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
