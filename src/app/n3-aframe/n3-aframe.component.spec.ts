import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N3AframeComponent } from './n3-aframe.component';

describe('N3AframeComponent', () => {
  let component: N3AframeComponent;
  let fixture: ComponentFixture<N3AframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N3AframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N3AframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
