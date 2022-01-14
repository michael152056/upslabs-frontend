import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1AframeComponent } from './n1-aframe.component';

describe('N1AframeComponent', () => {
  let component: N1AframeComponent;
  let fixture: ComponentFixture<N1AframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1AframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1AframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
