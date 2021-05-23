import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Printing3dComponent } from './printing3d.component';

describe('Printing3dComponent', () => {
  let component: Printing3dComponent;
  let fixture: ComponentFixture<Printing3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Printing3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Printing3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
