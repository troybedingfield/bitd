import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightclockComponent } from './eightclock.component';

describe('EightclockComponent', () => {
  let component: EightclockComponent;
  let fixture: ComponentFixture<EightclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EightclockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
