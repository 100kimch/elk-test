import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dash4Component } from './dash4.component';

describe('Dash4Component', () => {
  let component: Dash4Component;
  let fixture: ComponentFixture<Dash4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dash4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dash4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
