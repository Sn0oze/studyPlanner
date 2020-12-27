import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseChartComponent } from './rose-chart.component';

describe('RoseChartComponent', () => {
  let component: RoseChartComponent;
  let fixture: ComponentFixture<RoseChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoseChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
