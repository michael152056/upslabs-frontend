import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Networking3Component } from './networking3.component';

describe('Networking3Component', () => {
  let component: Networking3Component;
  let fixture: ComponentFixture<Networking3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Networking3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Networking3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
