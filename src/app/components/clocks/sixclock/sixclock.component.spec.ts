import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixclockComponent } from './sixclock.component';

describe('SixclockComponent', () => {
  let component: SixclockComponent;
  let fixture: ComponentFixture<SixclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixclockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
