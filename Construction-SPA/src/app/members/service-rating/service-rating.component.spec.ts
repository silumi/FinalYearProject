import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRatingComponent } from './service-rating.component';

describe('ServiceRatingComponent', () => {
  let component: ServiceRatingComponent;
  let fixture: ComponentFixture<ServiceRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
