import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroSitesComponent } from './micro-sites.component';

describe('MicroSitesComponent', () => {
  let component: MicroSitesComponent;
  let fixture: ComponentFixture<MicroSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
