import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Networking2Component } from './networking2.component';

describe('Networking2Component', () => {
  let component: Networking2Component;
  let fixture: ComponentFixture<Networking2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Networking2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Networking2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
