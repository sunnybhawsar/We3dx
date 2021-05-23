import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireusComponent } from './hireus.component';

describe('HireusComponent', () => {
  let component: HireusComponent;
  let fixture: ComponentFixture<HireusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
