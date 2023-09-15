import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaClinicaComponent } from './HistoriaClinicaComponent';

describe('HistoriaClinicaComponent', () => {
  let component: HistoriaClinicaComponent;
  let fixture: ComponentFixture<HistoriaClinicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriaClinicaComponent]
    });
    fixture = TestBed.createComponent(HistoriaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
