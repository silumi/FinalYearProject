import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Content0Component } from './content0.component';

describe('Content0Component', () => {
  let component: Content0Component;
  let fixture: ComponentFixture<Content0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
