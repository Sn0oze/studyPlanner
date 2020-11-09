import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermGroupComponent } from './term-group.component';

describe('TermGroupComponent', () => {
  let component: TermGroupComponent;
  let fixture: ComponentFixture<TermGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
