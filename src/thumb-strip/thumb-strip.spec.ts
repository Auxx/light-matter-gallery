import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbStrip } from './thumb-strip';

describe('ThumbStrip', () => {
  let component: ThumbStrip;
  let fixture: ComponentFixture<ThumbStrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbStrip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbStrip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
