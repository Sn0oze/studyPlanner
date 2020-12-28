import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBasketComponent } from './course-basket.component';

describe('CourseBasketComponent', () => {
  let component: CourseBasketComponent;
  let fixture: ComponentFixture<CourseBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
