import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhmAframeComponent } from './ihm-aframe.component';

describe('IhmAframeComponent', () => {
  let component: IhmAframeComponent;
  let fixture: ComponentFixture<IhmAframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhmAframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IhmAframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
