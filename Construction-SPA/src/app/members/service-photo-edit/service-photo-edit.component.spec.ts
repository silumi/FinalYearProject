import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePhotoEditComponent } from './service-photo-edit.component';

describe('ServicePhotoEditComponent', () => {
  let component: ServicePhotoEditComponent;
  let fixture: ComponentFixture<ServicePhotoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePhotoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePhotoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
