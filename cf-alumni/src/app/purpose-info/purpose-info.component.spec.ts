import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeInfoComponent } from './purpose-info.component';

describe('PurposeInfoComponent', () => {
  let component: PurposeInfoComponent;
  let fixture: ComponentFixture<PurposeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurposeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
