import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dash6Component } from './dash6.component';

describe('Dash6Component', () => {
  let component: Dash6Component;
  let fixture: ComponentFixture<Dash6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dash6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dash6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
