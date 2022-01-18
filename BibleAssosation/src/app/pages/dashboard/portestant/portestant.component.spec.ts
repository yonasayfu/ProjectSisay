import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortestantComponent } from './portestant.component';

describe('PortestantComponent', () => {
  let component: PortestantComponent;
  let fixture: ComponentFixture<PortestantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortestantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortestantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
