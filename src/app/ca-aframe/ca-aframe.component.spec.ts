import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaAframeComponent } from './ca-aframe.component';

describe('CaAframeComponent', () => {
  let component: CaAframeComponent;
  let fixture: ComponentFixture<CaAframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaAframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaAframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
