import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniDirComponent } from './alumni-dir.component';

describe('AlumniDirComponent', () => {
  let component: AlumniDirComponent;
  let fixture: ComponentFixture<AlumniDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
