import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberReviewComponent } from './member-review.component';

describe('MemberReviewComponent', () => {
  let component: MemberReviewComponent;
  let fixture: ComponentFixture<MemberReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
