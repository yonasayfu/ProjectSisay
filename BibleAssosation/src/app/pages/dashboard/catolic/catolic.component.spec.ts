import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatolicComponent } from './catolic.component';

describe('CatolicComponent', () => {
  let component: CatolicComponent;
  let fixture: ComponentFixture<CatolicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatolicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatolicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
