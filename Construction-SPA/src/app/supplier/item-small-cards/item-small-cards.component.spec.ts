import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSmallCardsComponent } from './item-small-cards.component';

describe('ItemSmallCardsComponent', () => {
  let component: ItemSmallCardsComponent;
  let fixture: ComponentFixture<ItemSmallCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSmallCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSmallCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
