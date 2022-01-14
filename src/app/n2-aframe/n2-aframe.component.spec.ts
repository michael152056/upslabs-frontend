import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2AframeComponent } from './n2-aframe.component';

describe('N2AframeComponent', () => {
  let component: N2AframeComponent;
  let fixture: ComponentFixture<N2AframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N2AframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N2AframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
