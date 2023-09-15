import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarhcComponent } from './listarhc.component';

describe('ListarhcComponent', () => {
  let component: ListarhcComponent;
  let fixture: ComponentFixture<ListarhcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarhcComponent]
    });
    fixture = TestBed.createComponent(ListarhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
