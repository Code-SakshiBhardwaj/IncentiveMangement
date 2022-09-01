import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersondashboardComponent } from './salespersondashboard.component';

describe('SalespersondashboardComponent', () => {
  let component: SalespersondashboardComponent;
  let fixture: ComponentFixture<SalespersondashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalespersondashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
