import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCardsComponent } from './popular-cards.component';

describe('PopularCardsComponent', () => {
  let component: PopularCardsComponent;
  let fixture: ComponentFixture<PopularCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
