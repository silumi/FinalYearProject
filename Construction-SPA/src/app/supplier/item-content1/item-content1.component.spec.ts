import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContent1Component } from './item-content1.component';

describe('ItemContent1Component', () => {
  let component: ItemContent1Component;
  let fixture: ComponentFixture<ItemContent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemContent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
