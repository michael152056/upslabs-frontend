import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputacionAvanzadaComponent } from './computacion-avanzada.component';

describe('ComputacionAvanzadaComponent', () => {
  let component: ComputacionAvanzadaComponent;
  let fixture: ComponentFixture<ComputacionAvanzadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputacionAvanzadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputacionAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
