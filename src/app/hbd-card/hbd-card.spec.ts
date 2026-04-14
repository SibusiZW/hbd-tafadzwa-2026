import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbdCard } from './hbd-card';

describe('HbdCard', () => {
  let component: HbdCard;
  let fixture: ComponentFixture<HbdCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HbdCard],
    }).compileComponents();

    fixture = TestBed.createComponent(HbdCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
