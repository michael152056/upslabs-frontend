import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Networking1Component } from './networking1.component';

describe('Networking1Component', () => {
  let component: Networking1Component;
  let fixture: ComponentFixture<Networking1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Networking1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Networking1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
