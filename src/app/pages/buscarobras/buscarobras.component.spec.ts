import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarobrasComponent } from './buscarobras.component';

describe('BuscarobrasComponent', () => {
  let component: BuscarobrasComponent;
  let fixture: ComponentFixture<BuscarobrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarobrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarobrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
