import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEquiposComponent } from './crud-equipos.component';

describe('CrudEquiposComponent', () => {
  let component: CrudEquiposComponent;
  let fixture: ComponentFixture<CrudEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
