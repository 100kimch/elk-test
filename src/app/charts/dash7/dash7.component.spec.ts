import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dash7Component } from './dash7.component';

describe('Dash7Component', () => {
  let component: Dash7Component;
  let fixture: ComponentFixture<Dash7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dash7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dash7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
