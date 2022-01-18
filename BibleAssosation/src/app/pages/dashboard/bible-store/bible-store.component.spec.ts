import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleStoreComponent } from './bible-store.component';

describe('BibleStoreComponent', () => {
  let component: BibleStoreComponent;
  let fixture: ComponentFixture<BibleStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibleStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
