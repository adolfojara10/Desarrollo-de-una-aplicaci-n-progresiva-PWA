import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarobrasComponent } from './cargarobras.component';

describe('CargarobrasComponent', () => {
  let component: CargarobrasComponent;
  let fixture: ComponentFixture<CargarobrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarobrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarobrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
