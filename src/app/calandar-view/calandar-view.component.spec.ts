import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalandarViewComponent } from './calandar-view.component';

describe('CalandarViewComponent', () => {
  let component: CalandarViewComponent;
  let fixture: ComponentFixture<CalandarViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalandarViewComponent]
    });
    fixture = TestBed.createComponent(CalandarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
