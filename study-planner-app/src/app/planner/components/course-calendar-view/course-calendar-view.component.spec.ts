import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCalendarViewComponent } from './course-calendar-view.component';

describe('CourseCalendarViewComponent', () => {
  let component: CourseCalendarViewComponent;
  let fixture: ComponentFixture<CourseCalendarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCalendarViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
