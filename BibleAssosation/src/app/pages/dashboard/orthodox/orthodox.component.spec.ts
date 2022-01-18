import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthodoxComponent } from './orthodox.component';

describe('OrthodoxComponent', () => {
  let component: OrthodoxComponent;
  let fixture: ComponentFixture<OrthodoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthodoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthodoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
