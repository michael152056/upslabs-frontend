import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVirtualComponent } from './tour-virtual.component';

describe('TourVirtualComponent', () => {
  let component: TourVirtualComponent;
  let fixture: ComponentFixture<TourVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
